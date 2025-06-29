import { Image, ImageSourcePropType, SafeAreaView, View } from 'react-native';
import { ScreenWrapper } from '../../../components/screen-wrapper';

import Logo from '../../../../logo.png';
import { Button } from '../../../components/button';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function LoginInfoScreen() {
  const navigation = useNavigation();

  function handleContinue() {
    navigation.navigate('Login' as never);
  }

  return (
    <ScreenWrapper>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Image source={Logo as ImageSourcePropType} style={styles.logo} />
        </View>
        <Button title="Continuar" onPress={handleContinue} />
      </SafeAreaView>
    </ScreenWrapper>
  );
}
