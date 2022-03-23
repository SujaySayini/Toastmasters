export default (state = [], action) => {
    if(action.type === "CREATE"){
       return [...state, action.payload]
   } else{
       return state;
   }
}
