import { css } from '@emotion/react';
import { TodoList } from './TodoItemType';

const TodoItem = ({
  todo,
  toggleCheckbox,
  deleteTodoList,
}: {
  todo: TodoList;
  toggleCheckbox: (index: number) => void;
  deleteTodoList: (index: number) => void;
}) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgb(240, 240, 240);
      `}
    >
      <input
        css={css`
          width: 20px;
        `}
        readOnly
        type="checkbox"
        checked={todo.checked}
        onChange={() => toggleCheckbox(todo.id)}
      />
      <div
        css={css`
          flex: 1;
        `}
      >
        {todo.contents}
      </div>
      <div
        css={css`
          font-size: 14px;
          color: gray;
        `}
      >
        {new Date(todo.time).toLocaleDateString()}
      </div>
      <button
        css={css`
          cursor: pointer;
          border: none;
          font-size: 14px;
          color: gray;
          border-radius: 5px;
          padding: 5px;
        `}
        onClick={() => deleteTodoList(todo.id)}
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
