import Main from '@/screens/Main';
import { StatusBar } from 'expo-status-bar';
import { TaskProvider } from '@/context/TaskContext';

export default function App() {
  return (
    <TaskProvider>
      <Main />
      <StatusBar style="light" />
    </TaskProvider>
  );
}
