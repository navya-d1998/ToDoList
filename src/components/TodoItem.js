import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTodo, deleteTodo, toggleTodo } from '../redux/noteReducer';

const TodoItem = ({ todo, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTodo(todo.id, title));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <button onClick={handleToggle}>{todo.completed ? 'Undo' : 'Complete'}</button>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default connect()(TodoItem);