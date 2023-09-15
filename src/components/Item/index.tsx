import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { FontAwesome } from '@expo/vector-icons';

type TextItemProps = {
  text: string;
  onRemove: () => void;
};

export const TextItem = ({ text, onRemove }: TextItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <FontAwesome name="trash" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  );
};
