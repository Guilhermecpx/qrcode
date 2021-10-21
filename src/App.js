import { useState } from 'react';
import './App.css';
import QRCodeCanvas from './QRCodeCanvas';

function App() {

  const [text, setText]  = useState("")
  return (
    <div className="App">
      <input onChange={(Element) => {setText(Element.target.value)} }  ></input>
      <QRCodeCanvas text={text}></QRCodeCanvas>
    </div>
  );
}

export default App;
