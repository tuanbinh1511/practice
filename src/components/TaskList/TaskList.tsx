import classNames from 'classnames'
import { Todo } from 'src/types/todo.type'

interface Props {
  doneTaskList?: boolean
  todos: Todo[]
  startTodo: (id: string) => void
  deleteTodo: (id: string) => void
  handleTodo: (id: string, doneTask: boolean) => void
}

function TaskList(props: Props) {
  const { doneTaskList, todos, handleTodo, deleteTodo, startTodo } = props
  const onChangeCheckbox = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTodo(id, e.target.checked)
  }
  return (
    <div className='my-2 '>
      <h2 className='my-2 text-lg font-bold'>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn Thành'}</h2>
      {todos.map((todo) => (
        <div className='my-2 flex justify-between ' key={todo.id}>
          <div className='flex flex-grow-[0.8] items-center'>
            <input
              type='checkbox'
              className='h-3 w-3 outline-none '
              checked={todo.doneTask}
              onChange={onChangeCheckbox(todo.id)}
            />
            <p className={classNames('px-2 text-sm', todo.doneTask ? 'text-gray-400 line-through' : 'text-gray-700')}>
              {todo.name}
            </p>
          </div>
          <div className='flex'>
            <button
              className='mr-1 rounded-md border-[1px] border-black bg-gray-200 p-1'
              onClick={() => startTodo(todo.id)}
            >
              ✏️
            </button>
            <button
              className='rounded-md border-[1px] border-black bg-gray-200 p-1'
              onClick={() => deleteTodo(todo.id)}
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList
