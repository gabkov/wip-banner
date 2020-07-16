import React from 'react';
import logo from './aranylovas_kesz.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <p>The site is under construction.</p>
        <img src={logo} width="30%" height="30%" alt="logo" />
        <p>Az oldal fejlesztés alatt.</p>
        <p>Elérhetőség/Contact: info@aranylovas.hu</p>
        <div id="wrapper">
          <div id="first">
            <a target="_blank" href="https://www.instagram.com/aranylo_vas/">
              <img class="socialicon img-hover-zoom" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"
                height="40"
                width="40"
                alt="insta"
              ></img>
            </a>
          </div>
          <div id="second">
            <a target="_blank" href="https://www.facebook.com/Aranyl%C3%B3-vas-104278354521849/">
              <img class="socialicon img-hover-zoom" src="https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png"
                height="40"
                width="40"
                alt="face"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
