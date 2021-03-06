import {StyleProp, ViewStyle} from 'react-native';
import {CountdownPresets, KeyboardOffsets} from './countdown.presets';

export interface CountdownProps {
  children?: React.ReactNode;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * One of the different types of presets.
   */
  preset?: CountdownPresets;

  /**
   * An optional background color
   */
  backgroundColor?: string;

  /**
   * An optional status bar setting. Defaults to light-content.
   */
  statusBar?: 'light-content' | 'dark-content';

  /**
   * Should we not wrap in SafeAreaView? Defaults to false.
   */
  unsafe?: boolean;

  /**
   * By how much should we offset the keyboard? Defaults to none.
   */
  keyboardOffset?: KeyboardOffsets;

  /**
   * Should keyboard persist on screen tap. Defaults to handled.
   * Only applies to scroll preset.
   */
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
}
