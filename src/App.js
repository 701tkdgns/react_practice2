import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Psh_Header, Psh_Services, Psh_Projects, Psh_Contact} from './containers';

import {Psh_Nav} from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <div>
        <Psh_Nav/>
        <Psh_Header />
      </div>

      <Psh_Services />
      <Psh_Projects />
      <Psh_Contact />
    </div>
  )
}

export default App;