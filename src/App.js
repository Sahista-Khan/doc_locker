import React from 'react';
import './App.css';
import Upload from './Upload/Upload';
import Header from './Header/Header';
import SideNav from './SideNav/SideNav'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="main_content">
        <SideNav/>
        <Upload />
      </div>

    </div>
  );
}

export default App;
