import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BlogScreen } from '../components/blogComponents/BlogScreen';
import { BlogPostScreen } from '../components/blogComponents/BlogPostScreen';
import { LoginScreen } from '../components/adminComponents/LoginScreen';

export const BlogRouter = ({isAuthenticated}) => {
        
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(startLoadingPublicPosts());

    }, [dispatch])
    

    return (
        <div>
            <Route path='/'>    
                <Switch>
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
                    <Route 
                        path="/:slug"
                        component={BlogPostScreen}
                    />
                </Switch>
            </Route>
        </div>
    )
}
