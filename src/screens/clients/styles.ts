import { StyleSheet } from 'react-native';
import { theme } from '../../config/theme';

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    position: 'relative',
  },
  listContent: { gap: 10 },
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
  addButton: {
    alignSelf: 'flex-end',
    backgroundColor: theme.button.color2,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.typography.body,
  },
});
