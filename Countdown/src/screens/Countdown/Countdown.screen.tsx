import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {BackgroundFluid, Button, HistoryTable} from '../../components/';
import {myTextStyles} from '../../styles/text';
import {CountdownProps} from './countdown.props';

//TODO: This will be two components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CountdownScreen(props: CountdownProps) {
  const [seconds, setSeconds] = React.useState(0);
  const interval = React.useRef(null);

  const stopTime = () => {
    clearInterval(interval.current);
  };

  const startCounter = () => {
    interval.current = setInterval(() => {
      setSeconds(prevState => prevState + 1);
    }, 1000);
  };

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <BackgroundFluid>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={[
              myTextStyles.normalText,
              {fontSize: 80, textAlign: 'center'},
            ]}>
            00:00:0{seconds}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button text="START" onPress={() => stopTime()} />
            <Button text="SET TIME" onPress={() => startCounter()} />
          </View>
          <HistoryTable />
        </View>
      </BackgroundFluid>
    </ScrollView>
  );
}
