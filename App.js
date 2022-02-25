import { StyleSheet, Text, View, ImageView, ImageBackground} from 'react-native';
import Login from './telas/login.js';
import Back from './telas/background.js';

export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
        <Text>Inside ola mundo</Text>
      </ImageBackground>
        
    
        
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
