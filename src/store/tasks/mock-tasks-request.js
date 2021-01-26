const mockTasksRequest = {
  total_count: 123,
  result: [
    {
      name: `Загрузить новые данные`,
      id: 1,
      duration: 120,
      steps: [
        {
          name: `Запросить данные`,
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
        {
          name: `Запросить еще данные`,
          id: 2,
          type: `GET`,
          endpoint: `192.292.2.245/anotherdata/`,
          params: [
            {
              id: 1,
              key: `param1`,
              value: `true`,
            },
            {
              id: 2,
              key: `param2`,
              value: `500`,
            },
          ],
          error: `break`,
        },
      ],
    },

    {
      name: `сделать бэкап`,
      id: 2,
      duration: 80,
      steps: [
        {
          name: `Проверить разницу данных`,
          id: 1,
          type: `GET`,
          endpoint: `192.292.2.245/data/`,
          params: [
            {
              id: 1,
              key: `date_start`,
              value: `01.01.2021`,
            },
            {
              id: 2,
              key: `date_end`,
              value: `31.01.2021`,
            },
          ],
          error: `send email`,
        },
        {
          name: `скопировать разницу`,
          id: 2,
          type: `GET`,
          endpoint: `192.292.2.245/backup/`,
          params: [
            {
              id: 1,
              key: `url_to_copy`,
              value: `192.292.2.245/data/`,
            },
            {
              id: 2,
              key: `date_start`,
              value: `01.01.2021`,
            },
            {
              id: 3,
              key: `date_end`,
              value: `31.01.2021`,
            },
          ],
          error: `send email`,
        },
      ],
    },
  ],
};

export default mockTasksRequest;
