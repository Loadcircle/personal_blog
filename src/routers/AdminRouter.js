import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { CreatePost } from '../components/adminComponents/CreatePost'
import { DashboardScreen } from '../components/adminComponents/DashboardScreen'
import { NavBar } from '../components/adminComponents/NavBar'
import { PostsScreen } from '../components/adminComponents/PostsScreen'
import { UpdatePost } from '../components/adminComponents/UpdatePost'

export const AdminRouter = () => {
    
    return (            
        <div className="container">
            <NavBar/>
            
            <div>
                <Switch>

                    <Route
                        exact
                        path="/admin/dashboard"
                        component={DashboardScreen}
                    />
                    <Route
                        exact
                        path="/admin/posts"
                        component={PostsScreen}
                    />
                    <Route
                        path="/admin/post/edit/:slug"
                        component={UpdatePost}
                    />
                    <Route
                        exact
                        path="/admin/create"
                        component={CreatePost}
                    />

                    <Redirect to="/admin/dashboard"/>

                </Switch>
            </div>
        </div>
    )
}
