import { createStore } from "redux";

const INITIAL_DATA={
    auth:null
}

const reducer = (state=INITIAL_DATA,action) => { 
    if(action.type==='login'){
        return {...state,auth:action.payload}
    }
    return state
 }

export default createStore(reducer)