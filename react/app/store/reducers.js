import { combineReducers } from 'redux';

import application from './application/reducer'
import collection from './collection/reducer'
import flashcard from './flashcard/reducer'
import feedback from './feedback/reducer'
import session from './session/reducer'
import user from './user/reducer'

export default combineReducers({ 
  application,
  collection,
  flashcard,
  feedback,
  session,
  user 
});
