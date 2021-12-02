import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {myTextStyles} from '../../styles/text';
import {Button} from '../';
import {HistoryRowProps} from './historyRow.props';

export function HistoryRow(props: HistoryRowProps) {
  const {children} = props;
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text
        style={[
          myTextStyles.normalText,
          {textAlignVertical: 'center', fontSize: 14},
        ]}>
        The timer for 15/10/2021 04:23pm was
      </Text>
      <Text
        style={[
          myTextStyles.normalText,
          {textAlignVertical: 'center', fontSize: 14},
        ]}>
        00:23:76
      </Text>
    </View>
  );
}
