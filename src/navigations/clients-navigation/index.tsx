import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { renderHeader } from '../../components/header';
import { CreateClientScreen } from '../../screens/clients/create-client';

const Stack = createNativeStackNavigator();

export function ClientsNavigation() {
  return (
    <Stack.Navigator>
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
