import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import { startLoadingPublicPosts } from '../../actions/publicActions/post';
import { BlogPost } from './components/BlogPost';
import { MainPost } from './components/MainPost'

export const BlogScreen = () => {

    const posts = useSelector(state=>state.blog.posts) || [];
    
    const mainPost = useSelector(state=>state.blog.mainPost) || '';

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(startLoadingPublicPosts());

    }, [dispatch])

    console.log(mainPost)
       

    return (
        <main>
            <MainPost {...mainPost} />     
            
            <div className="album py-5 bg-light">
                <div className="container">    
                    <div className="row">                    
                    {
                        posts.map(post=>
                            (
                                <BlogPost key={post.id} {...post}/>
                            )
                        )
                    }   
                    </div>
                </div>
            </div>
        </main>
    )
}
