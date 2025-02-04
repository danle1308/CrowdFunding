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
  <ThirdwebProvider activeChain={Sepolia} secretKey='UKbN0SGcqbtU1hG89xKDTfgEhLGygsbh9AVtqfidbD0BW7AB-rS9m57d3P15Ix_jjXJIHgGG2RywZb_sbJ7TgA' clientId='25aa11a0acc9f76d6408fe6d80714d94'> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)