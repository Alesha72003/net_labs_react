import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Item from './Item';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const tasks = {
    1: {
      "title": "Сделать лабы №1-4 по РИП за ночь",
      "description": "А то будет очень плохо. Надо делать хорошо, делать плохо не надо.",
      "image": "1.png"
    },
    2: {
      "title": "Назвать Сережу фриком",
      "description": "А как же без этого?",
      "image": "2.png"
    },
    3: {
      "title": "Не умереть",
      "description": "Необязательно",
//      "image": "3.png"
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route exact path="/" element={<App tasks={Object.keys(tasks).map(a => ({"id": a, ...tasks[a]}))} />} />
      <Route path="/item/:id" element={<Item tasks={tasks} />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
