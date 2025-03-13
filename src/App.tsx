import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useRef, useState } from 'react';


function App() {
  type TodoList = {
    id: number,
    checked: boolean
    contents: string,
    time: number
  }


  const [todos, setTodos] = useState<TodoList[]>([]);
  const ifRef = useRef(0);

  const addTodoItem = (contents: string) => {
    const newTodo = {
      id: ifRef.current++,
      checked: false,
      contents: contents,
      time: new Date().getTime(),
    }

    setTodos([newTodo, ...todos]);
  }

  const toggleCheckbox = (id: number) => {
    setTodos(todos.map((todo) => {
      if(todo.id === id){
        return {
          ...todo,
          checked: !todo.checked
        }
      }
      return todo;
    }))
  }

  const deleteTodoList = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }


  return (
    <div className="app">
      <Header/>
      <Editor
        pushTodoList={addTodoItem}
        />
      <List todos={todos} toggleCheckbox={toggleCheckbox} deleteTodoList={deleteTodoList}/>
    </div>
  )
}

export default App
