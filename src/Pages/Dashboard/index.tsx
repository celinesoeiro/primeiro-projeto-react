import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/images/logo.svg';

import { Title, Form, Repositories } from './style';


const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt='github explorer'/>
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input placeholder="Digite o nome do repositório."/>
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/52112166?s=460&u=a3c9425787c98164fabd55c59c8dc0b8a84e0da0&v=4"
            alt="avatar"
          />
          <div>
            <strong>celinesoeiro/cat_dog_classifier</strong>
            <p>Classificador de gatos e cachorros construído com CNN.</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/52112166?s=460&u=a3c9425787c98164fabd55c59c8dc0b8a84e0da0&v=4"
            alt="avatar"
          />
          <div>
            <strong>celinesoeiro/cat_dog_classifier</strong>
            <p>Classificador de gatos e cachorros construído com CNN.</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/52112166?s=460&u=a3c9425787c98164fabd55c59c8dc0b8a84e0da0&v=4"
            alt="avatar"
          />
          <div>
            <strong>celinesoeiro/cat_dog_classifier</strong>
            <p>Classificador de gatos e cachorros construído com CNN.</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
      </Repositories>

    </>
  );
}

export default Dashboard;


/**
 * Como utiliza Typescript é melhor declarar a variavel como constante pois
 * assim fica mais fácil de adicionar tipagem.
 * No caso vão ser sempre do tipo React.FC (Functional Component)
 */
