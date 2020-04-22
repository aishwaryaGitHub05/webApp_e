import React from 'react';
import './App.css';
import HeaderComponent from './Components/HeaderComponent'
import MainComponent from './Components/MainComponent'
import FooterComponent from './Components/FooterComponent'


function App() {
  return (
    <div className="App">
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
    </div>
  );
}

export default App;
