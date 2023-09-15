import { View, Text } from 'react-native';
import { styles } from './styles';
import Header from '@/components/Header';
import Form from '@/components/Form';
import TasksController from '@/components/TasksController';

export default function Main() {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <Form />
      <TasksController />
    </View>
  );
}
