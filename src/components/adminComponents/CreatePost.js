import React from 'react'
import { createPost } from '../../actions/adminActions/posts';
import { FormPost } from './FormPost';

export const CreatePost = () => {

    
    const initialFormValues = {
        title: '',
        content: '',
        publish: '',
        fragment: '',
    }
    
    const dispatchCallback = createPost;


    return (
        <div>
            
            <br/>
            <br/>
            <br/>

            <FormPost dispatchCallback={dispatchCallback} initialFormValues={initialFormValues} />

        </div>
    )
}
