import './TodoItem.css'
import { TodoList } from './TodoItemType';

const TodoItem = ({todo}: {todo: TodoList}) => {

  return (
    <div className='todo-item'>
      <input
        readOnly
        type='checkbox'
        checked={todo.checked}
      />
      <div className='content'>
        {todo.contents}
      </div>
      <div className='date'>
        {new Date(todo.time).toLocaleDateString()}
      </div>
      <button>
        삭제
      </button>
    </div>
  )
}

export default TodoItem;