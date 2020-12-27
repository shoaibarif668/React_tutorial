// import React from 'react';
// import ReactDOM from 'react-dom';
// import './Sass/main.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


//Inline and internal styling in react is done through making objects #16

import {React} from 'react';
import ReactDOM from 'react-dom';
import './Sass/main.css';

let name="Shoaib";
let image="https://picsum.photos/200/300";

ReactDOM.render(
  <>
    <div className="heading">
        <h1>My name is {name}</h1>
    </div>
    <div className="head-img">
        <img src={image} alt=""/>
        <img src={image} alt=""/>
        <img src={image} alt=""/>
    </div>  
  </>,
  document.getElementById('root')
);