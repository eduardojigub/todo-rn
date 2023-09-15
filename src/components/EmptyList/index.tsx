import { View, Text } from 'react-native';

import Clipboard from '../../../assets/list/Clipboard.svg';
import { styles } from './styles';

export default function EmptyList() {
  return (
    <View style={styles.container}>
      <Clipboard width={72} height={72} />
      <View style={{ marginTop: 16 }}>
        <Text style={styles.descriptionBold}>
          You don't have any tasks registered yet
        </Text>
        <Text style={styles.descriptionNormal}>
          Create tasks and organize your to-do items
        </Text>
      </View>
    </View>
  );
}
