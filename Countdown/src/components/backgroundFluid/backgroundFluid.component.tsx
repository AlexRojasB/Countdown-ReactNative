import React from 'react';
import {Animated} from 'react-native';
import {myContainersStyle} from '../../styles/containers';
import {eventEmitter, Events} from '../../utils';
import {BackgroundFluidProps} from './backgroundFluid.props';

export function BackgroundFluid(props: BackgroundFluidProps) {
  const {children} = props;
  var valueToUpdate = 0;
  // const [animation, setAnimation] = React.useState(new Animated.Value(0));
  const animation = React.useRef(new Animated.Value(0));
  React.useEffect(() => {
    eventEmitter.subscribe(Events.STARTTIMER, _ => changeBackgroundColor());
    return () => {
      eventEmitter.unsubscribe(Events.STARTTIMER);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeBackgroundColor = () => {
    valueToUpdate += 0.2;
    Animated.timing(animation.current, {
      toValue: valueToUpdate,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      if (valueToUpdate == 1) {
        valueToUpdate = 0;
        Animated.timing(animation.current, {
          toValue: valueToUpdate,
          duration: 1000,
          useNativeDriver: false,
        }).reset();
      }
    });
  };

  const BackgroundColorConfig = animation.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],

    outputRange: [
      '#950101',
      '#CDDC39',
      '#009688',
      '#03A9F4',
      '#3F51B5',
      '#950101',
    ],
  });

  return (
    <Animated.View
      style={{
        ...myContainersStyle.container,
        backgroundColor: BackgroundColorConfig,
      }}>
      {children}
    </Animated.View>
  );
}
