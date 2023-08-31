import React from 'react-native';
import {Text} from 'react-native';
const UIText = ({style, children}) => {
  return (
    <Text
      style={{
        color: 'white',
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default UIText;
