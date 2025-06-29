import { StyleSheet } from 'react-native';
import { theme } from '../../config/theme';

export const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.typography.body,
    marginBottom: 8,
  },
  section: {
    marginVertical: 12,
  },
});
