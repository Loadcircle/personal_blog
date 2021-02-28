import { types } from "./types";

const initialState = {
    posts: [],
    mainPost: null
}

export const blogReducer = (state = initialState, action)=>{
    console.log(action.payload)
    switch (action.type){
        
        case types.publicPostsLoad:
            return{
                ...state,
                posts: [...action.payload],
            }
        
        case types.publicMainPost:
            return{
                ...state,
                mainPost: action.payload
            }

        default:
            return state;
    }
}