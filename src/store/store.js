import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { blogReducer } from "../reducers/blogReducer";
import { postReducer } from "../reducers/postReducer";

//To use the redux dev tool (chrome)
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//combine all the reducers
const reducers = combineReducers({
    auth: authReducer,
    post: postReducer,
    blog: blogReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        //Aplly middleware with redux think to async actions
        applyMiddleware(thunk)
    )
)