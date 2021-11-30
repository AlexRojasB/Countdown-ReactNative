import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {BackgroundFluid, Button} from '../../components/';
import {CountdownProps} from './countdown.props';

export function CountdownScreen(props: CountdownProps) {
  return (
    <ScrollView>
      <BackgroundFluid>
        <Text style={{color: '#fff'}}>00:00:010</Text>
        <View>
          <Button text="START" />
          <Button text="SET TIME" />
        </View>
        <View>
          <View>
            <Text>MOST RECENT TIMERS</Text>
            <Button text="CLEAR" />
          </View>
          <Text>The timer for 15/10/2021 04:23pm was            00:23:76</Text>
          <Text>The timer for 15/10/2021 04:23pm was            00:23:76</Text>
          <Text>The timer for 15/10/2021 04:23pm was            00:23:76</Text>
          <Text>The timer for 15/10/2021 04:23pm was            00:23:76</Text>
        </View>
      </BackgroundFluid>
    </ScrollView>
  );
}
