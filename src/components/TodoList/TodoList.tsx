import { Todo } from 'src/types/todo.type'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { useEffect, useState } from 'react'

interface HandleNewTodos {
  (todos: Todo[]): Todo[]
}

const syncToLocal = (handleNewTodos: HandleNewTodos) => {
  const todosString = localStorage.getItem('todos')
  const todosObj: Todo[] = JSON.parse(todosString || '[]')
  const newTodosObj = handleNewTodos(todosObj)
  localStorage.setItem('todos', JSON.stringify(newTodosObj))
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  const doneTodos = todos.filter((todo) => todo.doneTask)
  const notDoneTodos = todos.filter((todo) => !todo.doneTask)

  useEffect(() => {
    const todoString = localStorage.getItem('todos')
    const todoObj: Todo[] = JSON.parse(todoString || '[]')
    setTodos(todoObj)
  }, [])

  const addTodo = (name: string) => {
    const handler = (todoObj: Todo[]) => {
      return [...todoObj, todo]
    }
    const todo: Todo = {
      id: new Date().toISOString(),
      name: name,
      doneTask: false
    }
    setTodos((prev) => [...prev, todo])
    syncToLocal((todosObj: Todo[]) => [...todosObj, todo])
  }
  const handleTodo = (id: string, doneTask: boolean) => {
    const handler = (todoObj: Todo[]) => {
      return todoObj.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            doneTask
          }
        }
        return todo
      })
    }
    setTodos(handler)
    syncToLocal(handler)
  }
  const startTodo = (id: string) => {
    const findedTodo = todos.find((todo) => todo.id === id)
    if (findedTodo) {
      setCurrentTodo(findedTodo as Todo)
    }
  }
  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) return { ...prev, name }
      return null
    })
  }
  const finishTodo = () => {
    const handler = (todoObj: Todo[]) => {
      return todoObj.map((todo) => {
        if (todo.id === (currentTodo as Todo).id) {
          return currentTodo as Todo
        }
        return todo
      })
    }
    setTodos(handler)
    setCurrentTodo(null)
    syncToLocal(handler)
  }
  const deleteTodo = (id: string) => {
    if (currentTodo) {
      setCurrentTodo(null)
    }
    const handler = (todoObj: Todo[]) => {
      const findIndex = todoObj.findIndex((todo) => todo.id === id)
      const result = [...todoObj]
      if (findIndex > -1) {
        result.splice(findIndex, 1)
        return result
      }
      return todoObj
    }
    setTodos(handler)
    syncToLocal(handler)
  }
  return (
    <div className='mx-auto mt-10 w-[400px] bg-white px-6 py-4'>
      <p className='mb-4 text-lg font-bold'>TodoList TypeScripts</p>
      <TaskInput addTodo={addTodo} editTodo={editTodo} currentTodo={currentTodo} finishTodo={finishTodo} />
      <TaskList todos={notDoneTodos} handleTodo={handleTodo} startTodo={startTodo} deleteTodo={deleteTodo} />
      <TaskList doneTaskList todos={doneTodos} handleTodo={handleTodo} startTodo={startTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default TodoList
