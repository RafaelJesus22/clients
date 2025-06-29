import { NavigationContainer } from '@react-navigation/native';
import { Navigations } from './src/navigations';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';

function App() {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
        animated
      />
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
