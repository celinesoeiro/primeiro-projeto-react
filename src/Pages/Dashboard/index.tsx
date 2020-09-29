import React from 'react';

/**
 * Como utiliza Typescript é melhor declarar a variavel como constante pois
 * assim fica mais fácil de adicionar tipagem.
 * No caso vão ser sempre do tipo React.FC (Functional Component)
 */

const Dashboard: React.FC = () => {
  return (
    <h1>Dashboard</h1>
  );
}

export default Dashboard;

