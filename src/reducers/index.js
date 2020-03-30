import { combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import historyReducer from './historyReducer'
import exerciseReducer from './exerciseReducer'
import programReducer from './programReducer'

export const C = {
  CREATE_NEW_SESSION: 'CREATE_NEW_SESSION',
  ABORT_SESSION: 'ABORT_SESSION',
  SET_WEIGHT: 'SET_WEIGHT',
}

export default combineReducers({
  session: sessionReducer,
  history: historyReducer,
  exercises: exerciseReducer,
  programs: programReducer,
})
