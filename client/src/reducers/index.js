import { combineReducers } from "redux";
import speech from './speech'
<<<<<<< HEAD
import clubpage from'./clubpage';
export default combineReducers({
    speech,
    clubpage
=======
import user from './user'
import auth from './auth'

export default combineReducers({
    speech,
    user,
    auth
    //speech has create too??
>>>>>>> 9ec04c097cf2325da87f2adc7edc59286351c467
})