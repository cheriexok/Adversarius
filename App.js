import { StyleSheet, Text, View, ImageView, ImageBackground } from 'react-native';
import Login from './telas/login.js';
import Back from './telas/background.js';
import Orgcad from './telas/orgCad.js';
import Atletacad from './telas/atletaCad.js';
import Orgatleta from './telas/orgAtle.js';

export default function App() {

  return (
    <View>
    <View style={styles.container}>
       <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
       <Orgatleta/>
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


