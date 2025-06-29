import { StyleSheet } from 'react-native';
import { theme } from '../../config/theme';

export const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    color: theme.typography.body,
  },
  errorLabel: {
    color: theme.typography.error,
  },
  input: {
    backgroundColor: theme.input.background,
    padding: 12,
    borderRadius: 8,
    borderColor: theme.input.border,
    borderWidth: 1,
    color: theme.typography.body,
  },
  inputError: {
    borderColor: theme.typography.error,
    color: theme.typography.error,
  },
});
