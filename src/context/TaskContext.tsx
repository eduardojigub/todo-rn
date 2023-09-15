import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';

const TaskContext = createContext<{
  taskList: any[];
  setTaskList: React.Dispatch<React.SetStateAction<any[]>>;
  taskText: string;
  setTaskText: React.Dispatch<React.SetStateAction<string>>;
  removeTask: (taskId: number) => void;
  addTask: () => void;
  checkedTasks: Set<number>; // Include checkedTasks state
  toggleTaskStatus: (index: number) => void; // Include toggleTaskStatus function
}>({
  taskList: [],
  setTaskList: () => {},
  taskText: '',
  setTaskText: () => {},
  removeTask: () => {},
  addTask: () => {},
  checkedTasks: new Set(),
  toggleTaskStatus: () => {},
});

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [taskList, setTaskList] = useState<any[]>([]);
  const [taskText, setTaskText] = useState('');
  const [checkedTasks, setCheckedTasks] = useState<Set<number>>(new Set());

  const addTask = () => {
    if (taskText.trim() !== '') {
      const newTask = { id: Date.now(), text: taskText };
      if (taskList.some((task) => task.id === task.id)) {
        Alert.alert(
          'Task Already Exists',
          'There is already a task with this text.'
        );
      } else {
        setTaskList([...taskList, newTask]);
        setTaskText('');
      }
    }
  };

  const removeTask = (taskId: number) => {
    setTaskList((prevState) => prevState.filter((task) => task.id !== taskId));
    setCheckedTasks((prevCheckedTasks) => {
      const newCheckedTasks = new Set(prevCheckedTasks);
      newCheckedTasks.delete(taskId);
      return newCheckedTasks;
    });
  };

  const toggleTaskStatus = (taskId: number) => {
    setCheckedTasks((prevCheckedTasks) => {
      const newCheckedTasks = new Set(prevCheckedTasks);
      if (newCheckedTasks.has(taskId)) {
        newCheckedTasks.delete(taskId);
      } else {
        newCheckedTasks.add(taskId);
      }
      return newCheckedTasks;
    });
  };

  return (
    <TaskContext.Provider
      value={{
        taskList,
        setTaskList,
        taskText,
        setTaskText,
        addTask,
        removeTask,
        checkedTasks,
        toggleTaskStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  return useContext(TaskContext);
}
