import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './button.props';

export function Button(props: ButtonProps) {
  const {children, textStyle, text, ...rest} = props;
  const content = children || <Text style={textStyle}>{text}</Text>;

  return <TouchableOpacity {...rest}>{content}</TouchableOpacity>;
}
