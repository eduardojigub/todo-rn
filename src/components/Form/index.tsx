import { useState } from 'react';

import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

import Plus from '../../../assets/form/plus.svg';
import { useTask } from '../../context/TaskContext';

export default function Form() {
  const { taskText, setTaskText, addTask } = useTask();

  const [isFocused, setIsFocused] = useState(false);
  const [borderColor, setBorderColor] = useState('#0D0D0D');

  const handleAddTask = () => {
    console.log('handleAddTask called');
    console.log('taskText:', taskText);
    addTask(); // Call the addTask function from the context
  };

  const handleFocus = () => {
    setIsFocused(true);
    setBorderColor('#5E60CE'); // Change border color when focused
  };

  const handleBlur = () => {
    setIsFocused(false);
    setBorderColor('#0D0D0D'); // Reset border color when blurred
  };

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Add a new task"
        placeholderTextColor="#808080"
        style={[styles.input, { borderColor }]}
        onFocus={handleFocus} // Handle focus event
        onBlur={handleBlur} // Handle blur event
        value={taskText} // Bind the input value to taskText
        onChangeText={(text) => setTaskText(text)} // Update taskText on input change
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Plus />
      </TouchableOpacity>
    </View>
  );
}
