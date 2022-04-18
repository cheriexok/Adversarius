import { StyleSheet, View } from 'react-native';
import Login from './telas/1login.js';
import Cad from './telas/2cad.js';
import AtletaCad from './telas/3atletaCad.js'
import OrgCad from './telas/4orgCad.js';
import Perfil from './telas/5perfil.js';

export default function App() {

  return (
    <View style={styles.container}>
      <Perfil/>
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
