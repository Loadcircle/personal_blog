import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

//...rest pasa el resto de los elementos
export const PrivateRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname);
    
    return (
        <Route 
            {...rest}
            component={(props)=>(
                (isAuthenticated)
                ? 
                <Component {...props}/>
                :
                <Redirect to="/admin/login"/>
            )}
        >
        </Route>
    )
}

PrivateRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}