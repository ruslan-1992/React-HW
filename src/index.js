import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import {createStore} from 'react';
import {Provider} from 'react-redux'
// import App from './App';
// import App2 from './App2';
// import App3 from './App3';
// import App4 from './App4';
// import App5 from './App5';
import App6 from './App6';
// import App8 from './App8';
// import todoApp from './reducers';

import reportWebVitals from './reportWebVitals';

// let store = createStore(todoApp);
// let rootElement = document.getElementById('root');
// React.render(
//   <Provider store={store}>
//     {() => <App8/>}
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <App2/> */}
      {/* <App3/> */}
      {/* <App4/> */}
      {/* <App5/> */}
      <App6/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
