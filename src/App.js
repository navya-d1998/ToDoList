import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/noteReducer';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import { Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            gap: 2,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            To-Do List
          </Typography>
          <NewTodo />
          <TodoFilter />
          <TodoList />
        </Box>
      </Container>
    </Provider>
  );
}
export default App;