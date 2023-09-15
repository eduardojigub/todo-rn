import { View } from 'react-native';
import { styles } from './styles';
import Header from '@/components/Header';
import Form from '@/components/Form';
import TasksController from '@/components/TasksController';
import EmptyList from '@/components/EmptyList';
import ListItem from '@/components/ListItems';

export default function Main() {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <Form />
      <TasksController />
      <ListItem />
    </View>
  );
}
