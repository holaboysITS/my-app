import React from 'react';
import NavBar from '../components/NavBar/navbar';
import vibecat from '../utility/vibecat.gif';
const Page4: React.FC = () => {
  return (
    <div>
        <NavBar/>
      <h1>Macchinari</h1>
      <p>DA FARE: <br /> - HTML anche mobile <br /> - CSS (anche mobile)</p>
      <div>
        <img src={vibecat} alt="vibecat" />
      </div>
    </div>
  );
};


export default Page4;