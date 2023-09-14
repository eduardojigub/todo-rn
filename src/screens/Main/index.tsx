import { View, Text } from 'react-native';
import { styles } from './styles';
import Header from '@/components/Header';

export default function Main() {
  return (
    <View style={styles.mainContainer}>
      <Header />
    </View>
  );
}
