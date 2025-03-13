import './TodoItem.css'
import { TodoList } from './TodoItemType';

const TodoItem = (
  {todo, toggleCheckbox, deleteTodoList}:
  {
    todo: TodoList,
    toggleCheckbox: (index: number) => void,
    deleteTodoList: (index: number) => void
  }) => {

  return (
    <div className='todo-item'>
      <input
        readOnly
        type='checkbox'
        checked={todo.checked}
        onChange={() =>toggleCheckbox(todo.id)}
      />
      <div className='content'>
        {todo.contents}
      </div>
      <div className='date'>
        {new Date(todo.time).toLocaleDateString()}
      </div>
      <button onClick={() => deleteTodoList(todo.id)}>
        삭제
      </button>
    </div>
  )
}

export default TodoItem;