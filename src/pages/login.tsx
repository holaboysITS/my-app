import React from 'react';
import './login.css';
import { login, logout } from '../utility/helpers/services'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    <div className="App-header">
        
          <div className="e-card playing">
            <div className="image"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="infotoplogin">
              <br></br>
                <div className="card_header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
                    </svg>
                    <h1 className="form_heading">Log in</h1>
                </div>
                <div className='login-main'>
                <form className="form card" onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="username">Username</label>
                    <input className="input" name="username" type="text" placeholder="Username" id="username" onChange={handleInputChange} />
                  </div>
                  <div className="field">
                    <label htmlFor="password">Password</label>
                    <input className="input" name="password" type="password" placeholder="Password" id="password" onChange={handleInputChange} />

                  </div>
                  <div className="field">
                    <button className="button">ACCEDI</button>
                  </div>
                    </form>
                </div>
              <br></br>
            </div>
          </div>
        </div>


    
  );
};



export default Page1;