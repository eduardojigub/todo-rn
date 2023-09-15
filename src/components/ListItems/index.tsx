import { Alert, FlatList, View } from 'react-native';
import { useTask } from '../../context/TaskContext';
import EmptyList from '../EmptyList';
import { TextItem } from '../Item';
import { styles } from './styles';

function ListItem() {
  const { taskList, removeTask } = useTask(); // Access taskList from the context

  const handleRemoveTask = (taskId: number) => {
    Alert.alert('Remove task', `Do you really want to delete this task?`, [
      { text: 'No', style: 'cancel' },
      {
        text: 'Yes',
        onPress: () => removeTask(taskId),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={taskList}
        renderItem={({ item }) => (
          <TextItem
            text={item.text}
            onRemove={() => handleRemoveTask(item.id)}
            index={item.id}
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
