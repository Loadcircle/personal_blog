import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { setPostToUpdate, startDeletePost } from '../../actions/adminActions/posts'

export const Post = ({title, fragment, id, main_image, slug, publish}) => {

    const dispatch = useDispatch();

    const handleDelete = async()=>{
        const swal = await Swal.fire({
            title: 'Estas seguro que deseas eliminar este post?',  
            showDenyButton: true,
            confirmButtonText: `Eliminar`,
            denyButtonText: `Volver`,

        });
        if(swal.isConfirmed){
            dispatch(startDeletePost(id));
        }
    }

    const setActivePost = ()=>{
        dispatch(setPostToUpdate(id));
    }


    return (
        <div className="col-sm">                
            <div className="card" style={{width: '18rem'}}>
                <img src={main_image ? main_image : '//via.placeholder.com/250x250'} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{fragment}
                    </p>
                    <hr/>
                    <span>Estado: {publish == true ? 'Publicado' : 'Borrador'}</span>
                    <div className="flex">
                        <Link onClick={setActivePost} to={`/admin/post/edit/${slug ? slug : ''}`} className="btn btn-primary">
                            Editar
                        </Link>
                        <button onClick={handleDelete} className="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
