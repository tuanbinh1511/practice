import { useForm } from 'react-hook-form'
import { Todo } from 'src/types/todo.type'
import { useState } from 'react'

interface Props {
  addTodo: (name: string) => void
  currentTodo?: Todo | null
  editTodo: (name: string) => void
  finishTodo: () => void
}

function TaskInput(props: Props) {
  const { addTodo, currentTodo, editTodo, finishTodo } = props
  const [name, setName] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentTodo) {
      finishTodo()
    } else {
      addTodo(name)
      setName('')
    }
  }
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentTodo) {
      editTodo(e.target.value)
    } else {
      setName(e.target.value)
    }
  }
  // const { register, handleSubmit, reset, getValues, setValue } = useForm({
  //   defaultValues: {
  //     name: ''
  //   }
  // })
  // const onSubmit = handleSubmit((data) => {
  //   addTodo(data.name)
  //   reset({
  //     name: ''
  //   })
  // })
  return (
    <form className='my-2 flex justify-between ' onSubmit={handleSubmit}>
      <input
        type='text'
        className='flex-grow-[0.75] rounded-md border-[1px] border-black px-2 py-1 outline-none'
        placeholder='caption goes here!'
        value={currentTodo ? currentTodo?.name : name}
        onChange={onChangeInput}
        // {...register('name')}
      ></input>
      <button className=' rounded-lg border-[1px] border-black bg-gray-200 px-3 py-1'>
        {currentTodo ? '✔️' : '➕'}
      </button>
    </form>
  )
}

export default TaskInput
