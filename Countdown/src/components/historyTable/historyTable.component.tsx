import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {myTextStyles} from '../../styles/text';
import {Button, HistoryRow} from '../';
import {HistoryTableProps} from './historyTable.props';
import {eventEmitter, Events} from '../../utils';
import {connect, useDispatch} from 'react-redux';
import {
  ClearHistoryTimers,
  GetHistoryTimers,
} from '../../store/actions/CountdownActions';

const mapStateToProps = state => {
  return {
    saveTime: state.countdown.saveTime,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HistoryTable = (props: HistoryTableProps) => {
  var {saveTime} = props;
  const dispatch = useDispatch();
  React.useEffect(() => {
    eventEmitter.subscribe(Events.UPDATELIST, _ => updateList());
    return () => {
      eventEmitter.unsubscribe(Events.UPDATELIST);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateList = () => {
    dispatch(GetHistoryTimers());
  };

  const clearHistory = () => {
    console.log('clear');
    console.log('pato', saveTime);
    dispatch(ClearHistoryTimers());
    console.log('perro', saveTime);
  };

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
          }}
          onPress={() => clearHistory()}>
          CLEAR
        </Button>
      </View>
      <ScrollView style={{margin: 20}}>
        {saveTime ? (
          saveTime.map(x => (
            <HistoryRow key={x.when} wasString={x.was} whenString={x.when} />
          ))
        ) : (
          <View />
        )}
      </ScrollView>
    </View>
  );
};

export default connect(mapStateToProps)(HistoryTable);
