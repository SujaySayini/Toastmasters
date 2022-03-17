export default (state = [], action) => {
    if(action.type ==="FETCH"){
        return action.payload;
    } if(action.type === "CREATE"){
        return [...state, action.payload]
    } if(action.type === 'DELETE'){
        return action.payload;
    } if(action.type === 'SETTIME'){
        return action.payload;
    } else{
        return state;
    }
}