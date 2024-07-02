import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddElement } from '../redux/TodoSlice';

export const Input = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [enter, setEnter] = useState('');
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const isDuplicate = todos.some(el => el.text === enter);
    setDisable(isDuplicate);
  }, [enter, todos]);

  const handleAddTodo = () => {
    if (enter.trim() !== '') {
      dispatch(AddElement({ text: enter, favorite: false }));
      setEnter('');
    }
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Введите текст..."
        value={enter}
        onChange={(e) => setEnter(e.target.value)}
      />
      <button
        onClick={handleAddTodo}
        disabled={disable}
        className={disable ? 'disable' : ''}
      >
        Добавить
      </button>
    </section>
  );
};