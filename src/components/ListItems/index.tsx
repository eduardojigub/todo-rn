import { FlatList, View } from 'react-native';
import { useTask } from '../../context/TaskContext';
import EmptyList from '../EmptyList';
import { TextItem } from '../Item';
import { styles } from './styles';

function ListItem() {
  const { taskList } = useTask(); // Access taskList from the context

  return (
    <View style={styles.container}>
      <FlatList
        data={taskList}
        renderItem={({ item }) => <TextItem text={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <EmptyList />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default ListItem;
