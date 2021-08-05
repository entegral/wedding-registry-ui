import React from 'react';
import ReactDOM from 'react-dom';
import LoginManager from './LoginManager/LoginManager';
import FetchQuestions from './Questions/FetchQuestions';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <LoginManager 
      AppEntryPoint={FetchQuestions}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your LoginManager, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
