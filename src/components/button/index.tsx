import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text } from '@react-navigation/elements';
import { styles } from './styles';

interface ButtonProps {
  title: string;
  isLoading?: boolean;
}
export function Button({
  onPress,
  title,
  isLoading,
  ...props
}: TouchableOpacityProps & ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      {...props}
      style={styles.container}
      disabled={isLoading}
    >
      <Text style={styles.text}>{isLoading ? 'Loading...' : title}</Text>
    </TouchableOpacity>
  );
}
