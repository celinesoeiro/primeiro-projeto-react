import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/images/logo.svg';

import { Title, Form, Repositories, Error } from './style';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(()=>{
    const storageRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storageRepositories){
      return JSON.parse(storageRepositories);
    }

    return [];
  });

  /** EFFECTS */
  useEffect(()=>{
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories,
    ));
  },[repositories])


  /** FUNCTIONS */
  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo){
      setInputError('Digite autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get(`/repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepo('');
      setInputError('');
    } catch (err){
      setInputError('Erro na busca por esse repositório.');
    }
  }


  return (
    <>
      <img src={logo} alt='github explorer'/>

      <Title>Explore repositórios no Github.</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório."
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repo => (
        <Link key={repo.full_name} to={`/repository/${repo.full_name}`}>
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
          />
          <div>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </div>
          <FiChevronRight size={20}/>
        </Link>
        ))}
      </Repositories>

    </>
  );
}

export default Dashboard;


/**
 * Como utiliza Typescript é melhor declarar a variavel como constante pois
 * assim fica mais fácil de adicionar tipagem.
 * No caso vão ser sempre do tipo React.FC (Functional Component)
 *
 * !!inputError -> transforma a variavel de string para boolean
 */
