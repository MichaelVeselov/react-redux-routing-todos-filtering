export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all': {
      const { todosReducer } = state;
      return todosReducer.todos;
    }

    case 'active': {
      const { todosReducer } = state;
      return todosReducer.todos.filter((todo) => !todo.completed);
    }

    case 'completed': {
      const { todosReducer } = state;
      return todosReducer.todos.filter((todo) => todo.completed);
    }

    default: {
      const { todosReducer } = state;
      return todosReducer.todos;
    }
  }
};
