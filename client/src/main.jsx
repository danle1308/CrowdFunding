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
  <ThirdwebProvider activeChain={Sepolia} secretKey='CyiKCrCVwbe-rcos7RtL6dsZvs101_U_NChFBaBEPHVOo9290fBj1a0nvBLFoFfvW9N8pFD4uXOTrEpovQ_iTA' clientId='3016bdacf33a9e577a00c2ad5bd4fb11'> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)