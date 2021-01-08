import React from 'react';
import {useDispatch} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {push} from 'connected-react-router';

import MainPage from "../pages/main-page/main-page.jsx";
import TasksPage from "../pages/tasks-page/tasks-page.jsx";
import ShedulerPage from "../pages/sheduler-page/sheduler-page.jsx";
import MonitoringPage from "../pages/monitoring-page/monitoring-page.jsx";

export default function App() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-container">
        <div className="header">
          <div className="header__menu">
            <button className="header__menu-item" type="button" onClick={() => { dispatch(push(`/`)); }}>Главная</button>
            <button className="header__menu-item" type="button" onClick={() => { dispatch(push(`/tasks`)); }}>Задачи</button>
            <button className="header__menu-item" type="button" onClick={() => { dispatch(push(`/sheduler`)); }}>Планировщик</button>
            <button className="header__menu-item" type="button" onClick={() => { dispatch(push(`/monitoring`)); }}>Мониторинг</button>
          </div>
          <button className="header__autorization-button" type="button">Авторизация</button>
        </div>
        <div className="main-content-container">
          <Switch>
            <Route exact path="/tasks" component={TasksPage} />
            <Route exact path="/sheduler" component={ShedulerPage} />
            <Route exact path="/monitoring" component={MonitoringPage} />
            <Route exact path="/" component={MainPage} />
            <Route path="*" component={MainPage} />
          </Switch>
        </div>
      </div>
    </>
  );
}
