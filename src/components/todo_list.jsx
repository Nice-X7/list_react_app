import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddFavorite, DeleteElement } from '../redux/TodoSlice';
import { Input } from './Input';

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  return (
    <>
      <Input />
      {
        todos.map((todo, index) => (
        <div className={todo.favorite ? 'section section2' : 'section'} key={index}>
            <div className="star star2">
            <button onClick={() => dispatch(AddFavorite({ index }))}>★</button>
            </div>
            <div className="text">
            {todo.text}
            </div>
            <div className="delete">
            <button onClick={() => dispatch(DeleteElement({ index }))}>❌</button>
            </div>
        </div>
        ))
      }
    </>
  );
};