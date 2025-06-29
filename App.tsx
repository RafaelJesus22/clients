import { NavigationContainer } from '@react-navigation/native';
import { Navigations } from './src/navigations';
import { StatusBar } from 'react-native';
import { theme } from './src/config/theme';

function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
        animated
      />
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </>
  );
}

export default App;
