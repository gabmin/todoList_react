import { KeyboardEvent, ChangeEvent, useRef, useState } from 'react';
import './Editor.css'

const Editor = ({pushTodoList}: {pushTodoList: (contents: string) => void}) => {
  const [todo, setTodo] = useState('');

  const contentsRef = useRef<HTMLInputElement>(null);

  const changeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const confirmList = () => {
    if(todo.length === 0 && contentsRef.current !== null) {
      contentsRef.current.focus();
      return
    };
    pushTodoList(todo)
    setTodo('');
  }

  const enterList = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && !e.nativeEvent.isComposing) {
      confirmList();
    }
  }

  return (
    <div className='editor'>
      <input
        ref={contentsRef}
        placeholder='새로운 Todo...'
        value={todo}
        onChange={changeTodo}
        onKeyDown={enterList}
      />
      <button onClick={confirmList}>
        추가
      </button>
    </div>
  )
}

export default Editor;