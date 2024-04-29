import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './bootstrap.min.css'
import ContextShare from './components/context/ContextShare';
import TokenAuth from './components/context/TokenAuth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ContextShare>
      <BrowserRouter>
        <TokenAuth>
          <App />
        </TokenAuth>
      </BrowserRouter>
    </ContextShare>
  </React.StrictMode>
);

