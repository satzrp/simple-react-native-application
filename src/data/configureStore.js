import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import PeopleReducer from './people/PeopleReducer'

const rootReducer = combineReducers({
  peopleState: PeopleReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))
