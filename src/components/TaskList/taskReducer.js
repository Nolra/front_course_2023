// action = { type, payload } - типо события и нагрузка на событие
// dispatch = фукция диспетчер которая доводит до reducer объект действия
// reducer = фукция которая консолидирует логику изменения состояния

const tasksReducer = (tasks, { type, payload }) => { // данные = any type, действие = { type } - что произошло
  switch (type) { // 'added' or 'delete' or 'changed'
    case 'added': {
      return [
        ...tasks, // распаковали наш массив данных и
        { ...payload, done: false } // ...payload = id: payload.id, text: payload.text добавили новый объект
      ]
    }
    case 'deleted': {
      return tasks.filter((task) => task.id !== payload.taskId)
    }
    case 'checked': {
      return tasks.map((task) => {
        if (task.id === payload.id) return { ...task, done: !task.done };
        else return task;
      })
    }
    case 'titleChanged': {
      return tasks.map((task) => {
        if (task.id === payload.id) return { ...task, text: payload.title };
        else return task;
      })
    }
    default: {
      throw Error('Неизвестное действие: ' + type);
    };
  }
};

export { tasksReducer };