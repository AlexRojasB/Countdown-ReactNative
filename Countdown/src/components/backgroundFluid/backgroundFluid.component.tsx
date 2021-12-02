import React from 'react';
import {View} from 'react-native';
import {BackgroundFluidProps} from './backgroundFluid.props';

export function BackgroundFluid(props: BackgroundFluidProps) {
  const {children} = props;
  return <View style={{backgroundColor: '#950101', height: '100%'}}>{children}</View>;
}
