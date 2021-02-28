import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/adminActions/auth';
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formValue, setFormValue] = useForm({
        email: 'admin@admin.com',
        password: '123456',
    });

    const {email, password} = formValue;

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(startLogin(email, password));
    }

    return (
        <main>
            <div className="centered_screen_box">
                <div className="card" style={{width: '18rem'}}>

                    <div className="card-body">                    
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input 
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={setFormValue}
                                    className="form-control" 
                                    id="email" 
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={setFormValue}
                                    className="form-control" 
                                    id="password" 
                                    placeholder="Contraseña"
                                />
                                <label htmlFor="email">Password</label>
                            </div>
                            <div className="d-flex flex-row-reverse">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary "
                                >Login</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}
