import appThemeReducer from './appTheme';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  appTheme: appThemeReducer,
});

export default rootReducer;
