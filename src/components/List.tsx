import { ChangeEvent, useState } from 'react';
import './List.css'
import TodoItem from './TodoItem';
import { TodoList } from './TodoItemType';

const List = ({todos} : {todos: TodoList[]}) => {

  const [searchText, setSearchText] = useState('')
  const getFilteredList = () => {
    if(searchText === '') return todos

    const result = todos.filter((todo) => {
      return todo.contents.includes(searchText)
    })

    return result
  }
  const onChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }
  return (
    <div className='list'>
      <h4>
        Todo List 🐥
      </h4>
      <input
        placeholder='검색어를 입력하세요'
        value={searchText}
        onChange={onChangeSearchText}
      />
      <div className='todos_wrapper'>
        { getFilteredList().map((todo) => {
            return (
              <TodoItem key={todo.id} todo={todo}/>
            )
        })}
      </div>
    </div>
  )
}

export default List;