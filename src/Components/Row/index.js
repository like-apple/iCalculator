import React from 'react';
import {View} from 'react-native';

export default ({children}) => (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style={{flexDirection: 'row'}}>{children}</View>
);
