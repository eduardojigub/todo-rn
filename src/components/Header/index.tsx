import { Text, View } from 'react-native';

import { styles } from './styles';

import Rocket from '../../../assets/header/rocket.svg';
import To from '../../../assets/header/to.svg';
import Do from '../../../assets/header/do.svg';

export default function Header() {
  return (
    <View style={styles.container}>
      <Rocket width={50} height={50} />
      <To width={45} height={50} />
      <Do width={55} height={50} />
    </View>
  );
}
