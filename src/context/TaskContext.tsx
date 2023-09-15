import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';

const TaskContext = createContext<{
  taskList: any[];
  setTaskList: React.Dispatch<React.SetStateAction<any[]>>;
  taskText: string;
  setTaskText: React.Dispatch<React.SetStateAction<string>>;
  removeTask: (taskName: string) => void;
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
      if (taskList.some((task) => task === taskText)) {
        Alert.alert(
          'Task Already Exists',
          'There is already a task with this text.'
        );
      } else {
        setTaskList([...taskList, taskText]);
        setTaskText('');
      }
    }
  };

  const removeTask = (taskName: string) => {
    setTaskList((prevState) => prevState.filter((task) => task !== taskName));
    const taskIndex = taskList.findIndex((task) => task === taskName);
    if (taskIndex !== -1) {
      const newCheckedTasks = new Set(checkedTasks);
      newCheckedTasks.delete(taskIndex);
      setCheckedTasks(newCheckedTasks);
    }
  };

  const toggleTaskStatus = (index: number) => {
    const newCheckedTasks = new Set(checkedTasks);
    if (newCheckedTasks.has(index)) {
      newCheckedTasks.delete(index);
    } else {
      newCheckedTasks.add(index);
    }
    setCheckedTasks(newCheckedTasks);
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
