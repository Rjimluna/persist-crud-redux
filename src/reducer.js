import { combineReducers } from 'redux'
import usersReducer from './pages/users/ducks'

export const reducer = combineReducers({
    usersInformation: usersReducer
})

