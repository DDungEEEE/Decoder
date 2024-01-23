import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Clock from './practice_02/Clock';
import Library from './practice/Library';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Clock/>
//   </React.StrictMode>
// );


function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

function App(props){
  return(
    <div>
      <Welcome name = "박민서"/>
      <Welcome name = "겁나"/>
      <Welcome name = "노싸가지"/>
    </div>
  )
}

root.render(
  <App/>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
