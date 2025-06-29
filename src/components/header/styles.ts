import { StyleSheet } from 'react-native';
import { theme } from '../../config/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: theme.gradient.color1,
    justifyContent: 'space-between',
  },
  headerButton: {
    width: 48,
  },
  title: {
    color: theme.typography.body,
    fontWeight: 'bold',
  },
});
