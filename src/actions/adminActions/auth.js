import {firebase} from '../../firebase/firebase-config';
import { types } from '../../reducers/types';
import Swal from 'sweetalert2';


export const startLogin = (email, password)=>{ 
    
    return (dispatch)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user})=>{
                dispatch(login(user.uid, user.displayName)); 
            })
            .catch(e=>{
                Swal.fire({
                    title: 'Error!',
                    text: e.message, 
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            });
    }
}

export const login = (uid, displayName)=>{
    return {
        type: types.authLogin,
        payload: {
            uid,
            displayName
        }
    }
}

export const StartLogout = ()=>{
    return async(dispatch)=> {
        await firebase.auth().signOut();

        dispatch(logout());
    }
}

export const logout = ()=>{
    return {
        type: types.authLogout
    }
}