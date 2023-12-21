import { HEADERSEARCH } from "./actionTypes";

export const inputValue=(value)=>{
    
    return{
        type:HEADERSEARCH, 
        payload:value
    }
}
