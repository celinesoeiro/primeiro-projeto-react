import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';
import Repository from '../Pages/Repository';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/repository/:repository+" component={Repository}/>
  </Switch>
)

export default Routes;

/**
 * O parametro + indica que é pra considerar tudo que vem depois da /
 * Por padrão seria até a próxima /
 */
