import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text } from '@react-navigation/elements';
import { styles } from './styles';

interface ButtonProps {
  title: string;
}
export function Button({
  onPress,
  title,
  ...props
}: TouchableOpacityProps & ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      {...props}
      style={styles.container}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
