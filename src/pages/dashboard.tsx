import React from 'react';
import NavBar from '../components/NavBar/navbar';
import Table from '../components/Table/table';
import './dashboard.css';

const Page2: React.FC = () => {
  return (
    <div>
      <div className='NAVBAR'>
        <NavBar/>
      </div>
      <div className="App-header">
      
          <div className="e-card playing">
            
            <div className="image"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="infotop">
            <h1>DASHBOARD</h1>
              <br></br>
              <br></br> 
              <div className="name">Devo eliminare lo sfondo animato, 
                                    lo mantengo solo nella home e nel login
                                    <br />
                                    . . . 
              </div>
              <div className='tab'>

               <Table/>
              </div>
            </div>
          </div>
        </div>
      {/*
      COMMENTI QUI 
        <table/>
      */}
    </div>
  );
};

export default Page2;