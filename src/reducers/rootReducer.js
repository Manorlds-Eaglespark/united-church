import { combineReducers } from 'redux';
import viewAllChurchesReducer from './churches/viewAllChurchesReducer';
import viewAllMemberPostsReducer from './churches/viewAllMemberPostsReducer';

export default combineReducers({
  viewAllChurchesReducer,
  viewAllMemberPostsReducer
});
