import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar/navbar';
import Table from '../components/Table/table';
import './dashboard.css';
import logo from '../logo.svg';

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
              <img src={logo} className="App-logo" alt="logo" />
              <br></br>
              <br></br> 
              <div className="name">"asojdhaisdh gasiod hgaslkj haslkdhgasjk"</div>
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