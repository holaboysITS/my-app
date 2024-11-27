import React, { useState, useEffect } from 'react';
import './login.css';
import { login, logout } from '../utility/helpers/services'
import { useNavigate } from 'react-router-dom';


const Page1: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginErrors, setLoginErrors] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        logout();
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const {name, value} = e.target;

        if (name === "username") { //swapped 'email' to 'username' because of the requirements
            setUsername(value);
        } else {
            setPassword(value); //just checks if target name is username or password, but i dont think it's going to work tbf
        };
    
    };

    const handleSubmit = async (form: React.FormEvent) => {

        form.preventDefault();
        console.log("handle called")
       if (username && password) {

        try {
            const user = await login(username, password)
            console.log('log iusername')
            if (user) {
                navigate('/dashboard');
            } else {
                setLoginErrors('Credenziali errate, riprovare');
            }
        } catch (ex) {
            throw ex;
        };
        
       } else {
        setLoginErrors('Inserire sia username che password');
       }
    }


  return (
    <div className='login-main'>
        <div className="wrapper">
            <div className="card-switch">
                <label className="switch">
                    <input type="checkbox" className="toggle" />
                    <span className="slider"></span>
                    <span className="card-side"></span>
                    <div className="flip-card__inner">
                        <div className="flip-card__front">
                            <div className="title">Accedi</div>
                            <form className="flip-card__form" onSubmit={handleSubmit}>
                                <input className="flip-card__input" name="username" placeholder="Username" type="text" onChange={handleInputChange}/>
                                <input className="flip-card__input" name="password" placeholder="Password" type="password" onChange={handleInputChange}/>
                                <button className="flip-card__btn" type='submit'>Accedi</button>
                            </form>
                        </div>
                        <div className="flip-card__back">
                            <div className="title">Registrati</div>
                            <form className="flip-card__form" action="">
                                <input className="flip-card__input" placeholder="Nome" type="name" />
                                <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                                <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                                <button className="flip-card__btn">Conferma</button>
                            </form>
                        </div>
                    </div>
                </label>
            </div>   
        </div>
    </div>
  );
};



export default Page1;