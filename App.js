import { StyleSheet, View } from 'react-native';
import Login from './telas/1login.js';
import Cad from './telas/2cad.js';
import AtletaCad from './telas/3atletaCad.js'
import OrgCad from './telas/4orgCad.js';
import Atletacadfinal from './telas/5atletaCadFinal.js';
import Orgcadfinal from './telas/orgCadFinal.js';

export default function App() {

  return (
    <View style={styles.container}>
      <Orgcadfinal/>
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
