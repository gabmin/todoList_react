import { ChangeEvent, useState } from 'react';
import TodoItem from './TodoItem';
import { TodoList } from './TodoItemType';
import { css } from '@emotion/react';

const List = ({
  todos,
  toggleCheckbox,
  deleteTodoList,
}: {
  todos: TodoList[];
  toggleCheckbox: (index: number) => void;
  deleteTodoList: (index: number) => void;
}) => {
  const [searchText, setSearchText] = useState('');
  const getFilteredList = () => {
    if (searchText === '') return todos;

    const result = todos.filter((todo) => {
      return todo.contents.includes(searchText);
    });

    return result;
  };
  const onChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 20px;
      `}
    >
      <h4>Todo List 🐥</h4>
      <input
        placeholder="검색어를 입력하세요"
        value={searchText}
        onChange={onChangeSearchText}
        css={css`
          width: 100%;
          border: none;
          border-bottom: 1px solid rgb(220, 220, 220);
          padding: 15px 0;
          &:foucs: {
            outline: none;
            border-bottom: 1px solid rgb(37, 147, 255);
          }
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 20px;
        `}
      >
        {getFilteredList().map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleCheckbox={toggleCheckbox}
              deleteTodoList={deleteTodoList}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
