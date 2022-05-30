import { loadPublicPosts, loadPublicMainPosts, getPost } from "../../helpers/loadPosts";
import { types } from "../../reducers/types";

const defaultUID = 'QruOXxexCPVYH6VflCYhQ6kZFwB3';

export const startLoadingPublicPosts = ()=>{
    return async (dispatch)=>{
        const mainPost = await loadPublicMainPosts();
        dispatch(setMainPost(mainPost));
        const posts = await loadPublicPosts();
        dispatch(setLoadPosts(posts));

    }
}

export const setLoadPosts = (posts)=>{
    return {
        type: types.publicPostsLoad,
        payload: posts,
    }
}

export const setMainPost = (mainPost)=>{
    
    return {
        type: types.publicMainPost,
        payload: mainPost,
    }
}

export const getActivePost = (slug)=>{
    
    return async(dispatch, getState)=>{
        
        const post = await getPost(defaultUID, slug);

        if(post){
            dispatch(setActivePost(post));
        }
    }
}

export const setActivePost = (post)=>{
    return {
        type: types.publicSetActivePost,
        payload: post,
    }
}