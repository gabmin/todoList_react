import { css } from '@emotion/react';
import { KeyboardEvent, ChangeEvent, useRef, useState } from 'react';

const Editor = ({
  pushTodoList,
}: {
  pushTodoList: (contents: string) => void;
}) => {
  const [todo, setTodo] = useState('');

  const contentsRef = useRef<HTMLInputElement>(null);

  const changeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const confirmList = () => {
    if (todo.length === 0 && contentsRef.current !== null) {
      contentsRef.current.focus();
      return;
    }
    pushTodoList(todo);
    setTodo('');
  };

  const enterList = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      confirmList();
    }
  };

  return (
    <div
      css={css`
        display: flex;
        gap: 10px;
      `}
    >
      <input
        ref={contentsRef}
        placeholder="새로운 Todo..."
        value={todo}
        onChange={changeTodo}
        onKeyDown={enterList}
        css={css`
          flex: 1;
          padding: 15px;
          border: 1px solid rgb(220, 220, 220);
          border-radius: 5px;
        `}
      />
      <button
        onClick={confirmList}
        css={css`
          width: 80px;
          cursor: pointer;
          background-color: rgb(37, 147, 255);
          border: none;
          border-radius: 5px;
          color: #fff;
        `}
      >
        추가
      </button>
    </div>
  );
};

export default Editor;
