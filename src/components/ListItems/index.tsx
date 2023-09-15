import React from 'react';
import { FlatList, Text } from 'react-native';
import { useTask } from '../../context/TaskContext';
import EmptyList from '../EmptyList';

function ListItem() {
  const { taskList } = useTask(); // Access taskList from the context

  return (
    <FlatList
      data={taskList}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={(item, index) => index.toString()}
      ListEmptyComponent={() => <EmptyList />}
    />
  );
}

export default ListItem;
