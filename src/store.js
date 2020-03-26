import { createStore } from 'redux'
import rootReducer from './reducers/index'

const localStorageName = 'workout-store'

const initialState = {}

const store = createStore(
  rootReducer,
  localStorage[localStorageName]
    ? JSON.parse(localStorage[localStorageName])
    : initialState
)

store.subscribe(() => {
  localStorage[localStorageName] = JSON.stringify(store.getState())
  console.log(store.getState())
})

export default store
