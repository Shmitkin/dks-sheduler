import React from 'react';

export default function App() {
  return (
    <>
      <div className="main-container">
        <div className="header">
          <div className="header__menu">
            <button className="header__menu-item" type="button">Раздел 1</button>
            <button className="header__menu-item" type="button">Раздел 2</button>
            <button className="header__menu-item" type="button">Раздел 3</button>
            <button className="header__menu-item" type="button">Раздел 4</button>
          </div>
          <button className="header__autorization-button" type="button">Авторизация</button>
        </div>
        <div className="main-content-container">
          <div className="task-area">
            <p>Область задач</p>
            <ul>
              <li>Задача1</li>
              <li>Задача2</li>
              <li>Задача3</li>
            </ul>
            <button type="button">Добавить задачу</button>
          </div>

          <div className="current-task-area">
            <p>Область конкретной задачи</p>
            <ul>
              <li>Шаг 1</li>
              <li>Шаг 2</li>
              <li>Шаг 3</li>
            </ul>
            <button type="button">Добавить шаг</button>
          </div>

          <div className="monitoring-area">
            <p>Мониторинг</p>
            <div>График</div>
            <div>еще какой-то график</div>
          </div>
        </div>
      </div>
    </>
  );
}
