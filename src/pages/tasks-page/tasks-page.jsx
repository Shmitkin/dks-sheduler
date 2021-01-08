import React from 'react';

export default function TasksPage() {
  return (
    <>
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
    </>
  );
}
