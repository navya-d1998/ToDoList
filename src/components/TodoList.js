import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { Box } from '@mui/material';

const TodoList = ({ todos, filter }) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') return true;
    if (filter === 'COMPLETED') return todo.completed;
    if (filter === 'PENDING') return !todo.completed;
    return true;
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.filter
});

export default connect(mapStateToProps)(TodoList);