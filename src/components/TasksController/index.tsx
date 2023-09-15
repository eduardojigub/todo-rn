import { View, Text } from 'react-native';
import { styles } from './styles';
import { useTask } from '../../context/TaskContext'; // Import the context

export default function TasksController() {
  const { taskList, checkedTasks } = useTask();

  const createdTasksCount = taskList.length;
  const doneTasksCount = checkedTasks.size;
  return (
    <View style={styles.containerTaskController}>
      <View style={styles.counterCointaner}>
        <Text style={styles.createdTasksText}>Created</Text>
        <View style={styles.counterBackground}>
          <Text style={styles.counter}>{createdTasksCount}</Text>
        </View>
      </View>
      <View style={styles.counterCointaner}>
        <Text style={styles.doneTasksText}>Done</Text>
        <View style={styles.counterBackground}>
          <Text style={styles.counter}>{doneTasksCount}</Text>
        </View>
      </View>
    </View>
  );
}
