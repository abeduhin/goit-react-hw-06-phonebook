import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react'
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
        </BrowserRouter>
    </PersistGate> 
     </Provider>
    
  </React.StrictMode>
);
