import { StyleSheet, Text, View, ImageView, ImageBackground} from 'react-native';
import Login from './telas/login.js';
import Cad from './telas/cad.js';
export default function App() {

  return (
    <View style={styles.container}>
      <Cad></Cad>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image:{
    flex: 1,
    justifyContent: "center"
  }
});
