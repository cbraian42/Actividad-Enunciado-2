import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Inicio</h1>
      <p>Bienvenido. Usa el menú para navegar o comienza el registro.</p>
      <Link to="/register/personal">
        <button>Comenzar registro</button>
      </Link>
    </div>
  );
};

export default Home;