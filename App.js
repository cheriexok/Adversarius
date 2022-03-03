import { StyleSheet, Text, View, ImageView, ImageBackground} from 'react-native';
import Login from './telas/login.js';
//import Fundo from './telas/fundo.js';

export default function App() {

  return (
    <View style={styles.container}>
      <Login></Login>
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
