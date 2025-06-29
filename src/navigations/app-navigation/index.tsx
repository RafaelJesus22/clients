import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClientsNavigation } from '../clients-navigation';
import { DashboardScreen } from '../../screens/dashboard';

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Clients" component={ClientsNavigation} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
    </Tab.Navigator>
  );
}
