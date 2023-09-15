import { View, Text } from 'react-native';
import { styles } from './styles';
import Header from '@/components/Header';
import Form from '@/components/Form';

export default function Main() {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <Form />
    </View>
  );
}
