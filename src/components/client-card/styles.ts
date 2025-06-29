import { StyleSheet } from 'react-native';
import { theme } from '../../config/theme';

export const styles = StyleSheet.create({
  clientContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: theme.input.background,
    borderRadius: 8,
    alignItems: 'center',
  },
  clientAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.button.color1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  clientAvatarText: {
    color: theme.typography.body,
    fontWeight: 'bold',
  },
  clientName: {
    color: theme.typography.body,
    fontWeight: 'bold',
    fontSize: 16,
  },
  clientEmail: { color: theme.typography.body },
});
