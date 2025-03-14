import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useReducer, useRef } from 'react';
import { TodoList, reducerType } from './components/TodoItemType';

const reducer = (state: TodoList[], action: reducerType): TodoList[] => {

  switch (action.type) {
    case "CREATE":
      return typeof action.data !== 'number' ? [action.data, ...state] : state
    case "CHECKBOX":
      return state.map((todo) => {
        if(todo.id === action.data){
          return {
            ...todo,
            checked: !todo.checked
          }
        }
        return todo;
      })
    case "DELETE":
      return state.filter((todo) => todo.id !== action.data)
    default:
      return state
  }
}

function App() {

  const [todos, dispatch] = useReducer(reducer, [])
  const ifRef = useRef(0);

  const addTodoItem = (contents: string) => {
    const newTodo = {
      id: ifRef.current++,
      checked: false,
      contents: contents,
      time: new Date().getTime(),
    }

    dispatch({
      type: 'CREATE',
      data: newTodo,
    })
  }

  const toggleCheckbox = (id: number) => {
    dispatch({
      type: 'CHECKBOX',
      data: id
    })
  }

  const deleteTodoList = (id: number) => {
    dispatch({
      type: "DELETE",
      data: id
    })
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
