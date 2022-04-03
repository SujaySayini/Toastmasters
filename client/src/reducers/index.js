import { combineReducers } from "redux";
import speech from './speech'
import user from './user'
import auth from './auth'

export default combineReducers({
    speech,
    user,
    auth
    //speech has create too??
})