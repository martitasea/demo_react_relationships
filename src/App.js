import React, {useState} from 'react';
import './App.css';
import Father from './components/Father/Father';
import { MainProvider } from './userContext';

function App() {
  const [contexto, setCont]=useState("contexto por defecto")
  return (
    <MainProvider 
    value={
      {contexto, setCont}
    }>
    <div className="App">
      <Father/>
    </div>
    </MainProvider>
  );
}

export default App;
