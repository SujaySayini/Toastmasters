export default  (state = [], action)=>{
    if(action.type === "CREATE"){
        return [...state, action.payload]
    }
    if(action.type ==="FETCH_ALL"){
        return action.payload;
    }else{
        return state;
    }
}