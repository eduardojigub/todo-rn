import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

import Plus from '../../../assets/form/plus.svg';

export default function Form() {
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Plus />
      </TouchableOpacity>
    </View>
  );
}
