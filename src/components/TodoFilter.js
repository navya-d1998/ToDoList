import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/noteReducer';
import { Button, Box } from '@mui/material';

const TodoFilter = ({ dispatch }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
      <Button onClick={() => dispatch(setFilter('ALL'))} variant="contained" color="primary">
        All
      </Button>
      <Button onClick={() => dispatch(setFilter('PENDING'))} variant="contained" color="primary">
        Pending
      </Button>
      <Button onClick={() => dispatch(setFilter('COMPLETED'))} variant="contained" color="primary">
        Completed
      </Button>
    </Box>
  );
};

export default connect()(TodoFilter);