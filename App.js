import { StyleSheet, View } from 'react-native';
import Login from './telas/1login.js';
import Cad from './telas/2cad.js';
import AtletaCad from './telas/3atletaCad.js'
import Atletacadfinal from './telas/4atletaCadFinal.js';
import OrgCad from './telas/5orgCad.js';
import Orgcadfinal from './telas/6orgCadFinal.js';
import Peneirac from './telas/peneira2.js';

export default function App() {

  return (
    <View style={styles.container}>
      <Peneirac/>
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
