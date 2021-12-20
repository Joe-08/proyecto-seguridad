import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import Login from './components/login';
import SignUp from './components/signup';
import SecretKey from './components/secretkey';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="sign-in" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="secret-key" element={<SecretKey />} />
    </Routes>
  </BrowserRouter>
</div>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();