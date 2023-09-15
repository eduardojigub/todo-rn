import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type TextItemProps = {
  text: string;
};

export const TextItem = ({ text }: TextItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity> */}
    </View>
  );
};
