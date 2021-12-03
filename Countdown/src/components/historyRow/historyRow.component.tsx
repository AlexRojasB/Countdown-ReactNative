import React from 'react';
import {View, Text} from 'react-native';
import {myTextStyles} from '../../styles/text';
import {HistoryRowProps} from './historyRow.props';

export function HistoryRow(props: HistoryRowProps) {
  const {wasString, whenString} = props;
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text
        style={[
          myTextStyles.normalText,
          {textAlignVertical: 'center', fontSize: 14},
        ]}>
        The timer for {whenString} was
      </Text>
      <Text
        style={[
          myTextStyles.normalText,
          {textAlignVertical: 'center', fontSize: 14},
        ]}>
        {wasString}
      </Text>
    </View>
  );
}
