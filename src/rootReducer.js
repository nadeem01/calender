import { combineReducers } from 'redux';
import appointments from './components/appointment/reducer'

export default combineReducers({
 callender: appointments,
  // media,
  // register,
  // login,
  // auth,
  // userMedia,
});
