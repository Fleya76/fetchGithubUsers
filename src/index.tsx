import React from 'react';
import ReactDOM from 'react-dom/client';
import UserProvider from "./context/UserContext";
import { EditModeProvider } from "./context/EditModeContext";
import App from './App';

import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <UserProvider>
        <EditModeProvider>
            <App />
        </EditModeProvider>
      </UserProvider>
  </React.StrictMode>
);