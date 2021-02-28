import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import slugify from 'slugify';
import JoditEditor from 'jodit-react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

export const FormPost = (props) => {
    const {dispatchCallback, initialFormValues} = props;
    const dispatch = useDispatch();    
    const history = useHistory();


    const { register, handleSubmit, watch, errors } = useForm();
    

    const {title, publish, fragment} = initialFormValues;
    const publishField = useRef();
    
    //Jodit editor ----
	const editor = useRef(null);
	const [content, setContent] = useState(initialFormValues.content);
	
	const editorConfig = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}

    const onSubmit = async(data)=>{
        const post = {
            content,
            slug: slugify(data.title),
            ...data,
        }
        
        if(publishField.current.value === 'true'){
            post.publish = true;
        }else{
            post.publish = false; 
        }
        await dispatch(dispatchCallback(post));
        history.push('/admin/posts')
    }

    const setAsPublish = ()=>{
        publishField.current.value = true;
    }
    const setAsDraft = ()=>{
        publishField.current.value = false;
    }

    const onBlur = (e)=>{
        const editorValue = e.target.innerHTML; 
        setContent(editorValue);
    }
    
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                
                <div className="form-group">
                    <label htmlFor="main_image">Imagen principal</label> <br/>
                    <input ref={register({required: true})} type="file" className="form-control-file" name="main_image" id="main_image" required/>
                </div>

                <br/>

                <div className="form-floating mb-3">
                    <input 
                        type="text"
                        name="title"
                        defaultValue={title}
                        ref={register({ required: true, minLength: 5 })}
                        className="form-control" 
                        id="title" 
                        placeholder="Un titulo increible"
                    />
                    <label htmlFor="title">Un titulo increible</label>
                </div>

                {errors.title && <span>Este campo es requerido</span>}

                <div className="form-floating mb-3">
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={editorConfig}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={onBlur} // preferred to use only this option to update the content for performance reasons
                        onChange={newContent => {}}
                    />
                </div>
                
                <div className="form-floating mb-3">
                    <textarea 
                        type="text"
                        name="fragment"
                        defaultValue={fragment}
                        ref={register({ required: true, minLength: 20, maxLength: 200 })}
                        className="form-control" 
                        id="fragment" 
                        placeholder="Un titulo increible"
                    />
                    <label htmlFor="fragment">La introducción y resumen de tu post</label>
                </div>

                <input 
                    type="hidden"
                    name="publish"
                    defaultValue={publish}
                    ref={publishField}
                />

                <div className="d-flex flex-row-reverse">
                    <button 
                        type="submit" 
                        className="btn btn-success "
                        onClick={setAsPublish}
                    >
                        Gurdar y publicar
                    </button>
                    
                    <button 
                        type="submit" 
                        className="btn btn-primary "
                        onClick={setAsDraft}
                    >
                        Guardar como borrador
                    </button>
                </div>

            </form>
            
        </div>
    )
}
