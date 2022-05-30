import { types } from "./types";

const initialState = {
    posts: [],
    mainPost: null,
    activePost: null,
}

export const blogReducer = (state = initialState, action)=>{
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
        
        case types.publicSetActivePost:
            return{
                ...state,
                activePost: action.payload
            }
        default:
            return state;
    }
}