import React from 'react'
import { Link } from 'react-router-dom';

export const MainPost = (props) => {

    const {fragment, title, slug, main_image} = props;

    return (
        <section style={{backgroundImage: `url(${main_image})`, backgroundSize: 'cover'}} className="jumbotron text-center">
          <Link to={`/post/${slug}`} className="container">
            <h1 className="jumbotron-heading">{title}</h1>
            <p className="lead text-muted">{fragment}</p>
            <p>
            </p>
          </Link>
        </section>
    )
}
