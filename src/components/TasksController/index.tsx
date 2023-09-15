import { View, Text } from 'react-native';
import { styles } from './styles';

export default function TasksController() {
  return (
    <View style={styles.containerTaskController}>
      <Text>Created</Text>
      <Text>Done</Text>
    </View>
  );
}
