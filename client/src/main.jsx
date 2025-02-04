import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import { Sepolia } from '@thirdweb-dev/chains';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider activeChain={Sepolia} secretKey='691f5a293f856afea2985edae6eef8193e35cdcb87dd3eaa2cb0b61e6a3e9ace' clientId='25aa11a0acc9f76d6408fe6d80714d94'> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)