import React from 'react';
import NavBar from '../components/NavBar/navbar';
import Table from '../components/Table/table';

const Page2: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <NavBar/>
      <p>per la dashboard se la vedono dev e matteo il re di tutto l universo conosciuto</p>
      <Table/>
    </div>
  );
};

export default Page2;