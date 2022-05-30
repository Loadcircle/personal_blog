import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
            
            <Link className="navbar-brand" to="/" >
                Blog
            </Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">                    
                    <Link className="nav-link active" aria-current="page" to="/" >
                        Inicio
                    </Link>      
                </li>        
            </ul>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        </div>
    </nav>
    )
}
