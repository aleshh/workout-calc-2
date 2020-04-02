import { combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import historyReducer from './historyReducer'
import exerciseReducer from './exerciseReducer'
import programReducer from './programReducer'

export default combineReducers({
  session: sessionReducer,
  history: historyReducer,
  exercises: exerciseReducer,
  programs: programReducer,
})
