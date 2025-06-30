import { FlatList, RefreshControl, Text, TouchableOpacity } from 'react-native';
import { ScreenWrapper } from '../../components/screen-wrapper';
import { useCallback, useState } from 'react';
import { useClients } from '../../hooks/useClients';
import { ClientModel } from '../../types/clients';
import { useAppSelector } from '../../store';
import { styles } from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { theme } from '../../config/theme';
import { ClientCard } from '../../components/client-card';

export function ClientsScreen(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const clients = useAppSelector(state => state.clients.clients);
  const { getClients } = useClients();
  const navigation = useNavigation();

  function addClient() {
    navigation.navigate('ClientsNavigation' as never);
  }

  const fetchClients = useCallback(async () => {
    setIsLoading(true);
    await getClients();
    setIsLoading(false);
  }, [getClients]);

  useFocusEffect(
    useCallback(() => {
      fetchClients();
    }, [fetchClients]),
  );

  return (
    <ScreenWrapper>
      <FlatList<ClientModel>
        data={clients ?? []}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={fetchClients}
            colors={[theme.typography.body]}
          />
        }
        keyExtractor={item => item.name}
        contentContainerStyle={styles.listContent}
        style={styles.list}
        renderItem={({ item }) => <ClientCard {...item} />}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={addClient}
        activeOpacity={0.7}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}
