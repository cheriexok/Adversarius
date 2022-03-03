import { StyleSheet, Text, View, ImageView, ImageBackground } from 'react-native';
import Login from './telas/login.js';
import Back from './telas/background.js';
import Orgcad from './telas/orgCad.js';

export default function App() {

  return (
    <View>
    <View style={styles.container}>
       <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
       <Orgcad/>
      </ImageBackground>

    
        
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,

  },
  image:{
    flex: 2,
    justifyContent: "center",
    maxWidth: '100%',
    maxHeight: '100%',
  }
});


