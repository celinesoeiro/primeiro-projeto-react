import React from 'react';

import {Title} from './style';


const Dashboard: React.FC = () => {
  return (
    <Title>Explore repositórios no Github.</Title>
  );
}

export default Dashboard;


/**
 * Como utiliza Typescript é melhor declarar a variavel como constante pois
 * assim fica mais fácil de adicionar tipagem.
 * No caso vão ser sempre do tipo React.FC (Functional Component)
 */
