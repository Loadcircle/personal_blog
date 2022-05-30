import React from 'react'
import { Link } from 'react-router-dom'

export const BlogPost = ({title, fragment, slug, main_image}) => {
    
    return (
        <div className="col-md-4">
          <div className="card mb-4 box-shadow">
            <img className="card-img-top" data-src={main_image ? main_image : '//via.placeholder.com/250x250'} alt="imagen" src={main_image ? main_image : '//via.placeholder.com/250x250'}/>
            <div className="card-body">
              <p className="card-text">{title}</p>
              <p className="card-text">{fragment}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to={`/${slug}`} className="btn btn-sm btn-outline-secondary">Ver</Link>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
    )
}
