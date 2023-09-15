import React from 'react';
import { FlatList, Text } from 'react-native';
import { useTask } from '../../context/TaskContext';
import EmptyList from '../EmptyList';
import { TextItem } from '../Item';

function ListItem() {
  const { taskList } = useTask(); // Access taskList from the context

  return (
    <FlatList
      data={taskList}
      renderItem={({ item }) => <TextItem text={item} />}
      keyExtractor={(item, index) => index.toString()}
      ListEmptyComponent={() => <EmptyList />}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default ListItem;
