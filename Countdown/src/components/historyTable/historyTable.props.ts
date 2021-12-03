import {ViewProps} from 'react-native';
import {historyType} from '../../store/reducers/CountdownReducer';

export interface HistoryTableProps extends ViewProps {
  saveTime?: historyType[];
}
