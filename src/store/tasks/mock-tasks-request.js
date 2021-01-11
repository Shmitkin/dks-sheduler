const mockTasksRequest = {
  total_count: 123,
  result: [
    {
      name: `Копирование`,
      id: 1,
      steps: [
        {
          name: `Запросить /адрес1`,
          id: 1,
        },
        {
          name: `Отправить что-то на /адрес1`,
          id: 2,
        },
      ],
    },
    {
      name: `Загрузка Данных`,
      id: 2,
      steps: [
        {
          name: `Запросить /адрес2`,
          id: 1,
        },
        {
          name: `Отправить что-то на /адрес2`,
          id: 2,
        },
      ],
    },
    {
      name: `Синхронизация `,
      id: 3,
      steps: [
        {
          name: `Запросить /адрес3`,
          id: 1,
        },
        {
          name: `Отправить что-то на /адрес3`,
          id: 2,
        },
      ],
    },
  ],
};

export default mockTasksRequest;
