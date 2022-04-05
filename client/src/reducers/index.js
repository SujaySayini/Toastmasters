import { combineReducers } from "redux";
import speech from './speech'
import clubpage from'./clubpage';
import user from './user'
import auth from './auth'
export default combineReducers({
    speech,
    clubpage,
    user,
    auth
    //speech has create too??
})