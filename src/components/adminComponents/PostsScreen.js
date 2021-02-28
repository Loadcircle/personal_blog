import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingPosts } from '../../actions/adminActions/posts';
import { Post } from './Post';

export const PostsScreen = () => {

    const dispatch = useDispatch();
    
    const {posts} = useSelector(state=>state.post);

    useEffect(()=>{
        dispatch(startLoadingPosts());

    }, [dispatch])


    return (
    
        <div className="mt-5">
            <div className="row">
            {
                posts.map(post=>
                    (
                        <Post key={post.id} {...post}/>
                    )
                )
            }
            </div>
        </div>
    )
}
