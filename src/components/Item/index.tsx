import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { FontAwesome } from '@expo/vector-icons';

import Checkbox from 'expo-checkbox';
import { useTask } from '@/context/TaskContext';

type TextItemProps = {
  text: string;
  onRemove: () => void;
  index: number; // Pass the index as a prop
};

export const TextItem = ({ text, onRemove, index }: TextItemProps) => {
  const { checkedTasks, toggleTaskStatus } = useTask();
  const isTaskChecked = checkedTasks.has(index);
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isTaskChecked}
        onValueChange={() => toggleTaskStatus(index)}
      />
      <Text
        style={[
          styles.text,
          isTaskChecked && styles.completedText, // Apply completedText style if checked
        ]}
      >
        {text}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <FontAwesome name="trash" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  );
};
