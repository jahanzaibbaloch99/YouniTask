import React from 'react';
import {View} from 'react-native';

import UIText from './UIText';

const FallbackComponent = ({text}) => {
  return (
    <View
      style={{
        flex: 1,
        aligSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <UIText
          style={{
            textAlign: 'center',
            fontSize:22
          }}>
          {text}
        </UIText>
      </View>
    </View>
  );
};

export default FallbackComponent;
