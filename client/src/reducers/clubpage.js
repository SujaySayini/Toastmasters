export default  (state = [], action)=>{
    if(action.type === "CREATE"){
        return [...state, action.payload]
    }
    if(action.type ==="FETCH"){
        return {... state, page: action.payload};
    }else{
        return state;
    }
}