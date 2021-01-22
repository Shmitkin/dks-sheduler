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
          type: `GET`,
          endpoint: `192.292.2.245/megadata/`,
          params: [
            {
              id: 1,
              key: `param1`,
              value: `123`,
            },
            {
              id: 2,
              key: `param2`,
              value: `value`,
            },
          ],
          error: `repeat`,
        },
      ],
    },
  ],
};

export default mockTasksRequest;
