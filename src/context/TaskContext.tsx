// TaskContext.js
import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext<{
  taskList: any[];
  setTaskList: React.Dispatch<React.SetStateAction<any[]>>;
  taskText: string; // Include taskText in the type definition
  setTaskText: React.Dispatch<React.SetStateAction<string>>; // Include setTaskText

  addTask: () => void; // Include addTask function
}>({
  taskList: [],
  setTaskList: () => {},
  taskText: '', // Initialize taskText in the default context value
  setTaskText: () => {}, // Initialize setTaskText in the default context value

  addTask: () => {}, // Initialize addTask in the default context value
});

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [taskList, setTaskList] = useState<any[]>([]);
  const [taskText, setTaskText] = useState(''); // Add taskText state

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTaskList([...taskList, taskText]);
      setTaskText(''); // Clear the input field
    }
  };

  return (
    <TaskContext.Provider
      value={{ taskList, setTaskList, taskText, setTaskText, addTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  return useContext(TaskContext);
}
