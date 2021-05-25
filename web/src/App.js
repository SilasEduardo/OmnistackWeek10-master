import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';

import DevForm from './components/DevForm/DevForm'
import DevItem from './components/DevItem/DevItem'

function App() {

  const [devs, setDevs] = useState([]);
  
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);
  }


  return (
    <div className="App">
      <header className="header">
        <h1>Devs Radar</h1>   
      </header>
      <main>
        <aside className="aside">
          <h1>Cadastrar</h1>
          <DevForm onSubmit={handleAddDev} />
        </aside>
        <section className="section">
          {devs.map(dev => 
            <DevItem key={dev._id} dev={dev} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
