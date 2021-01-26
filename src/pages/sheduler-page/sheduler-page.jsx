import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTasks} from "../../store/tasks/selectors.js";
import {Operation as TasksOperation} from "../../store/tasks/tasks.js";

const tasksSheduled = [
  {id: 1, name: `task1`, startDate: `26.01.2021`, startTime: 20, duration: 120},
  {id: 2, name: `task2`, startDate: `26.01.2021`, startTime: 9, duration: 520},
  {id: 3, name: `task3`, startDate: `29.01.2021`, startTime: 19, duration: 120},
  {id: 4, name: `task4`, startDate: `26.01.2021`, startTime: 3, duration: 120},
  {id: 5, name: `task5`, startDate: `27.01.2021`, startTime: 18, duration: 180},
];

const ROW_MAP = [
  {dayName: `monday`, date: `25.01.2021`, tasks: []},
  {dayName: `tue`, date: `26.01.2021`, tasks: []},
  {dayName: `wednes`, date: `27.01.2021`, tasks: []},
  {dayName: `thursd`, date: `28.01.2021`, tasks: []},
  {dayName: `friday`, date: `29.01.2021`, tasks: []},
  {dayName: `satuda`, date: `30.01.2021`, tasks: []},
  {dayName: `thusday`, date: `31.01.2021`, tasks: []},
];

const TIME_MAP = [60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900, 960, 1020, 1080, 1140, 1200, 1260, 1320, 1380, 1440];

const tasksToWeek = (tasks) => ROW_MAP.map((day) => {
  const tasksInDay = tasks.slice().filter((task) => task.startDate === day.date);
  return {...day, tasks: tasksInDay};
});

const tasksWeeked = tasksToWeek(tasksSheduled);

const mapTasksToCalendar = (days) => days.map((day) => {
  const timeMapping = [];
  day.tasks.forEach((task) => {
    const tr = TIME_MAP.map((time) => {
      if ((task.startTime * 60 < time) && (task.startTime * 60 + task.duration >= time)) {
        return {
          type: `filled`,
          taskId: task.id,
          taskName: task.name,
        };
      }
      return {type: `empty`};
    });
    timeMapping.push(tr);
  });
  return {...day, timeGraph: timeMapping};
});

const mappedTasks = mapTasksToCalendar(tasksWeeked);

const tasksToTr = (toTrTasks) => {
  const tasksMapped = [];
  let counter = 0;

  toTrTasks.forEach((interval, index, arr) => {
    if (interval.type === `empty`) {
      tasksMapped.push(interval);
      counter = 0;
    } else if (arr[index + 1] && interval.taskId === arr[index + 1].taskId) {
      counter += 1;
    } else if (arr[index + 1] && interval.taskId !== arr[index + 1].taskId) {
      tasksMapped.push({...interval, size: counter + 1});
    }
  });
  return tasksMapped;
};

const getTasksTr = () => mappedTasks.map((item) => ({...item, trLayout: item.timeGraph.map(tasksToTr)}));

console.log(getTasksTr());

export default function ShedulerPage() {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);

  useEffect(() => {
    // временное условие чтобы сохранялись данные при переключении между вкладками
    if (tasks.length === 0) {
      dispatch(TasksOperation.loadTasks());
    }
  }, [dispatch, tasks]);

  return (
    <section className="sheduler">
      <div className="sheduler__tasks">
        <h2>Задачи</h2>
        <ul className="sheduler__tasks-list">
          {tasks.map((task) => (
            <li className="sheduler__task" key={task.id}>
              <span>{`Название: ${task.name}`}</span>
              <span>{`Шагов: ${task.steps.length}`}</span>
              <span>{`Продолжительность: ${task.duration}`}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sheduler__diagram-area">
        <h2>Календарь</h2>
        <table className="sheduler__diagram">
          <thead className="sheduler__diagram-head">
            <tr className="sheduler__table-head-row">
              <td className="sheduler__table-col" />
              {new Array(24).fill(``).map((item, i) => (
                <td
                  className="sheduler__table-col"
                  key={`head-${Math.random()}`}
                >
                  {i}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {getTasksTr().map((item) => (
              <>
                {item.trLayout.length === 0 && (
                <tr className="sheduler__table-head-row" key={`body-row-${Math.random()}`}>
                  <td className="sheduler__table-col">{item.dayName}</td>
                  {new Array(24).fill(``).map(() => (
                    <td
                      className="sheduler__table-col"
                      key={`body-col-${Math.random()}`}
                    />
                  ))}
                </tr>
                )}
                {item.trLayout.map((trItem, index) => (
                  <tr className="sheduler__table-head-row" key={`body-row-${Math.random()}`}>
                    {index === 0 && <td className="sheduler__table-col" rowSpan={item.trLayout.length}>{item.dayName}</td>}
                    {trItem.map((oneItem) => (
                      <td
                        className="sheduler__table-col"
                        key={`body-col-${Math.random()}`}
                        colSpan={oneItem.size}
                      >
                        {oneItem.type === `empty` ? `` : oneItem.taskName }
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
