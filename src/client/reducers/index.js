import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux' // <-- Not being used. Set up linting

import board from './board-reducer'
import auth from './auth-reducer'
import feedback from './feedback-reducer'
import profile from './profile-reducer'
import settings from './settings-reducer'

const rootReducer = combineReducers({
  auth,
  board,
  routing,
  feedback,
  profile,
  settings,
})


export default rootReducer
