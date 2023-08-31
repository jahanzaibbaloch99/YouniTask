import React from 'react';
import {View} from 'react-native';
import FallbackComponent from '../Components/FallbackComponent';

const ComingSoon = () => {
  return (
    <View style={{flex: 1,backgroundColor:"#0f0f0f"}}>
      <FallbackComponent text={'Coming Soon'} />
    </View>
  );
};
export default ComingSoon;
