import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostToUpdate, updatePost } from '../../actions/adminActions/posts';
import { FormPost } from './FormPost';

export const UpdatePost = () => {
    
    const dispatch = useDispatch();

    const params = useParams();
    const {activePost} = useSelector(state=>state.post);
    const [checking, setChecking] = useState(true);
    
    useEffect(async()=>{
        await dispatch(getPostToUpdate(params.slug));
        setChecking(false);
    }, [dispatch])
    const initialFormValues = {...activePost}  

    const dispatchCallback = updatePost;
        
    if(checking){
        return (
            <div>Cargando...</div>
        )
    }


    return (
        <div>

        <br/>
        <br/>
        <br/>

        <FormPost dispatchCallback={dispatchCallback} initialFormValues={initialFormValues} />
            
        </div>
    )
}
