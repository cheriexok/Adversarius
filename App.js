import { StyleSheet, View } from 'react-native';
import Login from './telas/login.js';
import Cad from './telas/cad.js';
import AtletaCad from './telas/atletaCad.js'
import OrgCad from './telas/orgCad.js';

export default function App() {

  return (
    <View style={styles.container}>
      <OrgCad/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});
