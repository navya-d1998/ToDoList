import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/noteReducer';

import { TextField, Button, Box, Container } from '@mui/material';




const NewTodo = ({ dispatch }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <Container maxWidth="sm" >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          //height: '100vh',
          gap: 2,
        }}
      >
        <TextField
          label="Enter new to-do"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </Box>
    </Container>
  );
};

export default connect()(NewTodo);