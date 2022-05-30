import React, { useEffect, useState } from 'react';
import {firebase} from '../firebase/firebase-config';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


import { useDispatch } from 'react-redux';
import { login } from '../actions/adminActions/auth';


import { BlogScreen } from '../components/blogComponents/BlogScreen';
import { BlogPostScreen } from '../components/blogComponents/BlogPostScreen';


import { LoginScreen } from '../components/adminComponents/LoginScreen'
import { PrivateRouter } from './PrivateRouter';
import { AdminRouter } from './AdminRouter';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [checking, setChecking] = useState(true);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user=>{
            if(user?.uid){
                dispatch(login(user.uid, user.displayName))
                setIsAuthenticated(true);
            }else{
                setIsAuthenticated(false);
            }
            setChecking(false);
        });
    }, [dispatch]);

    if(checking){
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>

                    <Route 
                        exact
                        path="/:slug"
                        component={BlogPostScreen}
                    />
                    {
                        (!isAuthenticated) 
                        &&
                        (
                            <Route
                                exact
                                path="/admin/login"
                                component={LoginScreen}
                            />
                        )                    
                    }
                    <Route 
                        exact
                        path="/"
                        component={BlogScreen}
                    />
                    
                    <PrivateRouter 
                        // exact
                        path="/admin" 
                        isAuthenticated={isAuthenticated} 
                        component={ AdminRouter }
                    />  
                    
                    <Redirect to="/" />   

                </Switch>
            </div>
        </Router>
    )
}
