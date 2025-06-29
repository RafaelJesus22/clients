import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ClientsNavigation } from '../clients-navigation';
import { TabsNavigation } from '../tabs-navigation';

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={TabsNavigation} />
      <Stack.Screen name="ClientsNavigation" component={ClientsNavigation} />
    </Stack.Navigator>
  );
}
