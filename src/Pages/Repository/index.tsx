import React, {useEffect, useState} from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/images/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';


interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  /** EFFECTS */
  useEffect(()=>{
    // Uma forma de executar as duas chamadas ao mesmo tempo
    //
    // api.get(`/repos/${params.repository}`)
    // .then( response => {
    //   console.log('response',response)
    // });

    // api.get(`/repos/${params.repository}/issues`)
    // .then( response => {
    //   console.log('response',response)
    // });

    // Outra forma de executar as duas chamadas ao mesmo tempo
    //
    async function loadData(): Promise<void> {
      const [repo, issues] = await Promise.all([
        api.get(`/repos/${params.repository}`),
        api.get(`/repos/${params.repository}/issues`)
      ]);

      setRepository(repo.data);
      setIssues(issues.data);

    }
    loadData();

  },[params])

  return (
    <>
      <Header>
        <img src={logo} alt='github explorer'/>
        <Link to='/'>
          <FiChevronLeft size={16}/>
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map( issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20}/>
          </a>
        ))}
      </Issues>
    </>
  );
}

export default Repository;

