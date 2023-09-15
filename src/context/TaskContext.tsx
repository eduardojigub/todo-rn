// TaskContext.js
import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';

const TaskContext = createContext<{
  taskList: any[];
  setTaskList: React.Dispatch<React.SetStateAction<any[]>>;
  taskText: string; // Include taskText in the type definition
  setTaskText: React.Dispatch<React.SetStateAction<string>>; // Include setTaskText
  removeTask: (taskName: string) => void; // Include removeTask function
  addTask: () => void; // Include addTask function
}>({
  taskList: [],
  setTaskList: () => {},
  taskText: '', // Initialize taskText in the default context value
  setTaskText: () => {}, // Initialize setTaskText in the default context value
  removeTask: () => {}, // Initialize removeTask in the default context value
  addTask: () => {}, // Initialize addTask in the default context value
});

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [taskList, setTaskList] = useState<any[]>([]);
  const [taskText, setTaskText] = useState(''); // Add taskText state

  const addTask = () => {
    if (taskText.trim() !== '') {
      // Check for duplicate task
      if (taskList.some((task) => task === taskText)) {
        Alert.alert(
          'Task Already Exists',
          'There is already a task with this text.'
        );
      } else {
        setTaskList([...taskList, taskText]);
        setTaskText(''); // Clear the input field
      }
    }
  };
  const removeTask = (taskName: string) => {
    setTaskList((prevState) => prevState.filter((task) => task !== taskName));
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
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  return useContext(TaskContext);
}
