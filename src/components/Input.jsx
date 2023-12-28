import React, { useState, useEffect } from 'react';

export const Input = ({ kwest, setKwest }) => {
  const [enter, setEnter] = useState("");
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const isDuplicate = kwest.some(el => el.text === enter);
    setDisable(isDuplicate);
  }, [enter, kwest]);

  const textInInput = () => {
    setKwest([{ favorite: false, text: enter }, ...kwest]);
    setEnter("");
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Введите текст..."
        value={enter}
        onChange={(a) => setEnter(a.target.value)}
      />
      <button
        onClick={textInInput}
        disabled={disable}
        className={disable ? "disable" : ""}
      >
        Добавить
      </button>
    </section>
  );
};