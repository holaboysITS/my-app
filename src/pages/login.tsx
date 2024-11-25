import React from 'react';
import './login.css';
import { User } from '../utility/classes/user'


const Page1: React.FC = () => {

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
                            <form className="flip-card__form" action="">
                                <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                                <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                                <button className="flip-card__btn">Accedi</button>
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