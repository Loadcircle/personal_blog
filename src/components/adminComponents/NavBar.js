import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { StartLogout } from '../../actions/adminActions/auth';

export const NavBar = () => {

    const dispatch = useDispatch();

    const handleLogout = ()=>{
        
        dispatch(StartLogout());
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
            
            <Link className="navbar-brand" to="/admin/dashboard" >
                Admin
            </Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">                    
                    <Link className="nav-link active" aria-current="page" to="/admin/posts" >
                        Posts
                    </Link>      
                </li>       
                <li className="nav-item">    
                    <Link className="nav-link active" aria-current="page" to="/admin/create" >
                        New Post
                    </Link> 
                </li>   
            </ul>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                <button onClick={handleLogout} className="btn btn-outline-success btn-outline-light" type="submit">Logout</button>                
            </div>
        </div>
    </nav>
    )
}
