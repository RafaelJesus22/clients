import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginInfoScreen } from '../../screens/auth/login-info';
import { LoginScreen } from '../../screens/auth/login';
import { Header } from '../../components/header';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginInfo"
        component={LoginInfoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          header: ({ navigation }) => (
            <Header title="Login" onBack={navigation.goBack} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
