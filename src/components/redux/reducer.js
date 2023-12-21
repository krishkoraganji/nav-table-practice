import { HEADERSEARCH } from "./actionTypes";

const input={value:''}


export const inputReducer=(state=input,action)=>{
    if (HEADERSEARCH===action.type){
        return{...state,value:action.payload}
    }
    else{
        return state
    }
}