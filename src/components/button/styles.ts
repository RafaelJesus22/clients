import { StyleSheet } from 'react-native';
import { theme } from '../../config/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.button.color1,
    padding: 16,
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    color: theme.button.textColor,
    fontWeight: 'bold',
  },
});
