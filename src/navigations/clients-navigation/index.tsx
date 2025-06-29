import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ClientsScreen } from '../../screens/clients';
import { Header } from '../../components/header';
import { CreateClientScreen } from '../../screens/clients/create-clients';

const Stack = createNativeStackNavigator();

function renderHeader(
  title?: string,
  onBack?: () => void,
  onClose?: () => void,
) {
  return <Header title={title} onBack={onBack} onClose={onClose} />;
}

export function ClientsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Clients"
        component={ClientsScreen}
        options={{
          header: () => renderHeader('Clients'),
        }}
      />
      <Stack.Screen
        name="CreateClient"
        component={CreateClientScreen}
        options={{
          header: ({ navigation }) =>
            renderHeader('Add Client', navigation.goBack),
        }}
      />
    </Stack.Navigator>
  );
}
