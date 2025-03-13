import './TodoItem.css'

const TodoItem = () => {

  return (
    <div className='todo-item'>
      <input type='checkbox'/>
      <div className='content'>
        item
      </div>
      <div className='date'>
        date
      </div>
      <button>
        삭제
      </button>
    </div>
  )
}

export default TodoItem;