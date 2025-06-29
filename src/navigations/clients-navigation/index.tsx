import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginInfoScreen } from '../../screens/auth/login-info';

const Stack = createNativeStackNavigator();

export function ClientsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginInfo" component={LoginInfoScreen} />
    </Stack.Navigator>
  );
}
