import { Text, View } from 'react-native';
import { ClientModel } from '../../types/clients';
import { firstAlphabetLetterNotInName } from '../../utils';
import { styles } from './styles';

export function ClientCard(props: ClientModel) {
  return (
    <View style={styles.clientContainer}>
      <View style={styles.clientAvatar}>
        <Text style={styles.clientAvatarText}>
          {firstAlphabetLetterNotInName(props.name)}
        </Text>
      </View>
      <View>
        <Text style={styles.clientName}>{props.name}</Text>
        <Text style={styles.clientEmail}>{props.email}</Text>
      </View>
    </View>
  );
}
