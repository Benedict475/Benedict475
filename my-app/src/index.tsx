import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
Amplify.configure({

  Auth:{
    Cognito:{
      userPoolId:"us-east-1_e03t4GIzB",
      userPoolClientId:"4br16s8h52qb4mnlfvtdiq382k",
    }
  }
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
