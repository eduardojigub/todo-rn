import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export default function TasksController() {
  return (
    <>
      <View style={styles.containerTaskController}>
        <View style={styles.counterCointaner}>
          <Text style={styles.createdTasksText}>Created</Text>
          <View style={styles.counterBackground}>
            <Text style={styles.counter}>0</Text>
          </View>
        </View>
        <View style={styles.counterCointaner}>
          <Text style={styles.doneTasksText}>Done</Text>
          <View style={styles.counterBackground}>
            <Text style={styles.counter}>0</Text>
          </View>
        </View>
      </View>
    </>
  );
}
