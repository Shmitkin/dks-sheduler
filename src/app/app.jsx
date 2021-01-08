import React from 'react';

export default function App() {
  return (
    <>
      <div className="main-container">
        <div className="header">
          <div className="header__menu">
            <button className="header__menu-item" type="button">Общий</button>
            <button className="header__menu-item" type="button">Задачи</button>
            <button className="header__menu-item" type="button">Планировщик</button>
            <button className="header__menu-item" type="button">Мониторинг</button>
          </div>
          <button className="header__autorization-button" type="button">Авторизация</button>
        </div>
        <div className="main-content-container">

          <div className="task-area">
            <p className="task-area__title">Область задач</p>
            <ul className="task-area__list">
              <li className="task-area__list-item">Задача1</li>
              <li className="task-area__list-item">Задача2</li>
              <li className="task-area__list-item">Задача3</li>
            </ul>
            <button className="task-area__button" type="button">Добавить задачу</button>
          </div>

          <div className="current-task-area">
            <p className="current-task-area__title">Область конкретной задачи</p>
            <ul className="current-task-area__list">
              <li className="current-task-area__list-item">Шаг1</li>
              <li className="current-task-area__list-item">Шаг2</li>
              <li className="current-task-area__list-item">Шаг3</li>
            </ul>
            <button className="current-task-area__button" type="button">Добавить задачу</button>
          </div>

          <div className="monitoring-area">
            <p className="monitoring-area__title">Мониторинг</p>
            <div className="monitoring-area__mock-graph">График</div>
            <div className="monitoring-area__mock-graph">еще какой-то график</div>
          </div>
        </div>
      </div>
    </>
  );
}
