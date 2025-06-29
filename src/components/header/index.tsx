import { Button, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';

interface Props {
  title?: string;
  onBack?: () => void;
  onClose?: () => void;
}

export function Header({ onBack, onClose, title }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerButton}>
        {onBack && <Button title="B" onPress={onBack} />}
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.headerButton}>
        {onClose && <Button title="C" onPress={onClose} />}
      </View>
    </SafeAreaView>
  );
}

export function renderHeader(
  title?: string,
  onBack?: () => void,
  onClose?: () => void,
) {
  return <Header title={title} onBack={onBack} onClose={onClose} />;
}
