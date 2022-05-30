import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getActivePost } from '../../actions/publicActions/post';
import { NavBar } from './components/NavBar';

export const BlogPostScreen = () => {
  
    const dispatch = useDispatch();

    const params = useParams();
    const post = useSelector(state=>state.blog.activePost);
    
    const [checking, setChecking] = useState(true);
    
    useEffect(async()=>{
        await dispatch(getActivePost(params.slug));
        setChecking(false);
    }, [dispatch])
    

    if(checking){
        return (
            <div>Cargando...</div>
        )
    }

    return (
      <div className="container">
        <NavBar/>

          <div className="row">
      
          <div className="col-lg-8">
              <h1>{post && post.title}</h1>
              <img src={post && post.main_image} alt="imagen"/>
              <div 
                dangerouslySetInnerHTML={post && {
                  __html: post.content
                }}>
              </div>
          </div>
      
          <div className="col-md-4">
      
            <div className="card my-4">
              <h5 className="card-header">Search</h5>
              <div className="card-body">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for..." />
                  <span className="input-group-append">
                    <button className="btn btn-secondary" type="button">Go!</button>
                  </span>
                </div>
              </div>
            </div>
      
            <div className="card my-4">
              <h5 className="card-header">Categories</h5>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">HTML</a>
                      </li>
                      <li>
                        <a href="#">Freebies</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#">JavaScript</a>
                      </li>
                      <li>
                        <a href="#">CSS</a>
                      </li>
                      <li>
                        <a href="#">Tutorials</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="card my-4">
              <h5 className="card-header">Side Widget</h5>
              <div className="card-body">
                You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
              </div>
            </div>
      
          </div>
      
        </div>
  
      </div>
    )
}
