import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {BackgroundFluid, Button, HistoryTable} from '../../components/';
import {myTextStyles} from '../../styles/text';
import {CountdownProps} from './countdown.props';

//TODO: This will be two components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CountdownScreen(props: CountdownProps) {
  const [counter, setCounter] = React.useState('00:00:00');
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);
  const interval = React.useRef(null);
  var timeInSeconds = 0;
  var currentTimer = '00:00:00';

  const stopTime = () => {
    setIsTimerRunning(false);
    clearInterval(interval.current);
  };

  const startCounter = () => {
    console.log(isTimerRunning);
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      interval.current = setInterval(() => {
        timeInSeconds++;
        setCounter(convertSecondsToDisplay(timeInSeconds));
      }, 1000);
    } else {
      stopTime();
    }
  };

  const convertSecondsToDisplay = (sec: number) => {
    if (sec >= 60) {
      var minutes = Math.floor(sec / 60);
      var modSec = sec % 60;
      var hours = 0;
      if (minutes > 59) {
        hours = Math.floor(sec / 60);
        minutes = minutes % 60;
      }
      const hourString = ('0' + hours).slice(-2);
      const minuteString = ('0' + minutes).slice(-2);
      const secString = ('0' + modSec).slice(-2);
      currentTimer = hourString + ':' + minuteString + ':' + secString;
    } else {
      const secString = ('0' + sec).slice(-2);
      currentTimer = '00:00:' + secString;
    }
    return currentTimer;
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
            {counter}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button onPress={() => startCounter()}>
              {isTimerRunning ? 'STOP' : 'START'}
            </Button>
            <Button onPress={() => startCounter()}>
              {isTimerRunning ? 'STOP' : 'SET TIME'}
            </Button>
          </View>
          <HistoryTable />
        </View>
      </BackgroundFluid>
    </ScrollView>
  );
}
