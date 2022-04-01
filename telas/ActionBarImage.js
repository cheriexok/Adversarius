import React from 'react';

import {View, Image} from 'react-native';

const ActionBarImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={require('../assets/imgs/binoculo.png')}
        style={{
          width: 75,
          height: 75,
          borderRadius: 40 / 2,
          marginRight: 10,
        }}
      />
    </View>
  );
};

export default ActionBarImage;