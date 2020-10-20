import React from 'react';
import './App.css';
import Header from './Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeSearch from './HomeSearch/HomeSearch'
import UploadMain from './Upload/UploadMain'


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/upload" component={UploadMain} />
          <Route path="/" component={HomeSearch} />
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
