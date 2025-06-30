import {
  Dimensions,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { ScreenWrapper } from '../../components/screen-wrapper';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { useClients } from '../../hooks/useClients';
import { BarChart } from 'react-native-chart-kit';
import { theme } from '../../config/theme';
import { ClientCard } from '../../components/client-card';
import { styles } from './styles';
import { SalesStats } from '../../services/clients-service';
import { ClientModel } from '../../types/clients';

interface Stats {
  salesStats: SalesStats[];
  clientHighestSale: ClientModel | null;
  clientHighestAverage: ClientModel | null;
}

export function DashboardScreen(): React.JSX.Element {
  const { getStats } = useClients();

  const [stats, setStats] = useState<Stats | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchStats = useCallback(async () => {
    setIsLoading(true);
    const response = await getStats();
    setStats(response);
    setIsLoading(false);
  }, [getStats]);

  useFocusEffect(
    useCallback(() => {
      fetchStats();
    }, [fetchStats]),
  );

  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchStats} />
        }
      >
        <Text style={styles.title}>Sales per day</Text>
        {stats?.salesStats && (
          <BarChart
            data={{
              labels: stats?.salesStats?.map(stat =>
                stat.date?.split('-').reverse().join('/'),
              ),
              datasets: [
                {
                  data: stats?.salesStats?.map(stat => stat.total),
                },
              ],
            }}
            width={Dimensions.get('window').width * 0.9}
            height={280}
            yAxisLabel="R$"
            yAxisSuffix="k"
            yAxisInterval={1}
            chartConfig={{
              backgroundGradientFrom: theme.button.color1,
              backgroundGradientTo: theme.button.color2,
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={{
              marginVertical: 8,
              borderRadius: 4,
            }}
          />
        )}

        {stats?.clientHighestSale && (
          <View style={styles.section}>
            <Text style={styles.title}>Client with highest sale</Text>
            <ClientCard {...stats?.clientHighestSale} />
          </View>
        )}

        {stats?.clientHighestAverage && (
          <View style={styles.section}>
            <Text style={styles.title}>Client with highest average</Text>
            <ClientCard {...stats?.clientHighestAverage} />
          </View>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}
