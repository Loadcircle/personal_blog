import { db } from "../../firebase/firebase-config";
import { fileUpload } from "../../helpers/fileUpload";
import { getPost, loadPosts } from "../../helpers/loadPosts";
import { types } from "../../reducers/types";


export const createPost = (post)=>{
    return async(dispatch, getState)=>{
        const uid = getState().auth.uid;

        const file = await fileUpload(post.main_image[0]);

        if(file){
            post.main_image = file;
            const FirebasePost = await db.collection(`${uid}/blog/posts`).add(post);
            dispatch(addNewPost(FirebasePost.id, post));
        }       

    }
}

export const addNewPost = (id, post) =>{
    return {
        type: types.adminPostCreate,
        payload: {
            id,
            ...post
        }
    }
}

export const updatePost = (post)=>{
    return async(dispatch, getState)=>{
        const uid = getState().auth.uid;
        const id = getState().post.activePost.id;

        const file = await fileUpload(post.main_image[0]);

        if(file){
            post.main_image = file;
            await db.doc(`${uid}/blog/posts/${id}`).update(post)
        }   
    }
}

export const startLoadingPosts = ()=>{
    return async (dispatch, getState)=>{
        const uid = getState().auth.uid;
        
        const posts = await loadPosts(uid);
        dispatch(setLoadPosts(posts));

    }
}

export const setLoadPosts = (posts)=>{
    return {
        type: types.adminPostLoad,
        payload: posts,
    }
}

export const getPostToUpdate = (slug)=>{

    return async(dispatch, getState)=>{
        const uid = getState().auth.uid;
        
        const post = await getPost(uid, slug);

        if(post){
            dispatch(setPostToUpdate(post));
        }
    }

}

export const setPostToUpdate = (post)=>{
    return {
        type: types.adminSetPostToUpdate,
        payload: post,
    }
}



export const startDeletePost = (id)=>{
    return async (dispatch, getState)=>{
        const uid = getState().auth.uid;

        console.log(uid, id);

        await db.doc(`${uid}/blog/posts/${id}`).delete();

        dispatch(deletePost(id));
    }
}

export const deletePost = (id)=>{
    return {
        type: types.adminPostDelete,
        payload: id
    }
}
