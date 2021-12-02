import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {myContainersStyle} from '../../styles/containers';
import {myTextStyles} from '../../styles/text';
import {ButtonProps} from './button.props';

export function Button(props: ButtonProps) {
  const {text, textStyle, ...rest} = props;

  return (
    <TouchableOpacity {...rest}>
      <Text
        style={[
          myTextStyles.ButtonTextStyle,
          myContainersStyle.ButtonContainer,
          textStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
