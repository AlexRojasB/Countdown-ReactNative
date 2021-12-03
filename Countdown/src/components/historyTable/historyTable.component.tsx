import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {myTextStyles} from '../../styles/text';
import {Button, HistoryRow} from '../';
import {HistoryTableProps} from './historyTable.props';

export function HistoryTable(props: HistoryTableProps) {
  const {children} = props;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 10,
        }}>
        <Text style={[myTextStyles.normalText, {textAlignVertical: 'center'}]}>
          MOST RECENT TIMERS
        </Text>
        <Button
          textStyle={{
            fontSize: 16,
            paddingHorizontal: 20,
            paddingVertical: 5,
          }}>
          CLEAR
        </Button>
      </View>
      <ScrollView style={{margin: 20}}>
        <HistoryRow />
        <HistoryRow />
        <HistoryRow />
        <HistoryRow />
      </ScrollView>
    </View>
  );
}
