import { types } from "./types";
const initialState = {
    posts: [],
    activePost: null,
}
export const postReducer = (state = initialState, action)=>{
    
    switch (action.type){
        case types.adminPostCreate:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }

        case types.adminPostUpdate:
            return {
                ...state,
                posts: state.posts.map(
                    post => post.id === action.payload.id 
                        ? action.payload.post
                        : post
                )                
            }

        case types.adminPostDelete:
            return {
                ...state,
                posts: state.posts.filter(post=> post.id !== action.payload),
            }
    
        case types.adminSetPostToUpdate:
            return{
                ...state,
                activePost: action.payload
            }
        case types.adminPostLoad:
            return{
                ...state,
                posts: [...action.payload],
            }

        case types.adminPostLogoutCleaning:

            return {
                ...state,
                posts: []
            }
        default:
            return state
    }
}