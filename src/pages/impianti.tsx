import React from 'react';
import NavBar from '../components/NavBar/navbar';
import cattocrasso from '../utility/maxwell.gif';


const Page3: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <h1>Impianti</h1>
      <p>DA FARE: <br /> - HTML anche mobile <br /> - CSS (anche mobile)</p>
      <div>
        <img src={cattocrasso} alt="cattocrasso" />
      </div>
    </div>
  );
};


export default Page3;