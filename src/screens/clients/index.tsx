import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScreenWrapper } from '../../components/screen-wrapper';
import { useCallback, useState } from 'react';
import { useClients } from '../../hooks/useClients';
import { ClientModel } from '../../types/clients';
import { useAppSelector } from '../../store';
import { firstAlphabetLetterNotInName } from '../../utils';
import { styles } from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { theme } from '../../config/theme';

export function ClientsScreen(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const clients = useAppSelector(state => state.clients.clients);
  const { getClients } = useClients();
  const navigation = useNavigation();

  function addClient() {
    navigation.navigate('CreateClient' as never);
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
        renderItem={({ item }) => (
          <View style={styles.clientContainer}>
            <View style={styles.clientAvatar}>
              <Text style={styles.clientAvatarText}>
                {firstAlphabetLetterNotInName(item.name)}
              </Text>
            </View>
            <View>
              <Text style={styles.clientName}>{item.name}</Text>
              <Text style={styles.clientEmail}>{item.email}</Text>
            </View>
          </View>
        )}
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
