import { loadPublicPosts, loadPublicMainPosts } from "../../helpers/loadPosts";
import { types } from "../../reducers/types";


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
    console.log(mainPost)
    return {
        type: types.publicMainPost,
        payload: mainPost,
    }
}