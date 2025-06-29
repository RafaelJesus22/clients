import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from '../../screens/dashboard';
import { ClientsScreen } from '../../screens/clients';
import { theme } from '../../config/theme';
import { renderHeader } from '../../components/header';

const Tab = createBottomTabNavigator();

export function TabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.gradient.color2 },
      }}
    >
      <Tab.Screen
        name="Clients"
        component={ClientsScreen}
        options={{ header: () => renderHeader('Clients') }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ header: () => renderHeader('Dashboard') }}
      />
    </Tab.Navigator>
  );
}
