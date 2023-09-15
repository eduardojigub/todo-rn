import { Alert, FlatList, View } from 'react-native';
import { useTask } from '../../context/TaskContext';
import EmptyList from '../EmptyList';
import { TextItem } from '../Item';
import { styles } from './styles';

function ListItem() {
  const { taskList, removeTask } = useTask(); // Access taskList from the context

  const handleRemoveTask = (taskName: string) => {
    Alert.alert(
      'Remove task',
      `Do you really want to delete task ${taskName}?`,
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Yes',
          onPress: () => removeTask(taskName),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={taskList}
        renderItem={({ item }) => (
          <TextItem
            text={item}
            onRemove={() => handleRemoveTask(item)}
            index={item}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <EmptyList />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default ListItem;
