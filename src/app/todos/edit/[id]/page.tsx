import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

type Props = {
  params: {
    id: string
  }
}

type Todo = {
  id: number
  todo: string
  completed: boolean
}

const getTodoById = async (id: string): Promise<Todo> => {
  const response = await fetch(`https://dummyjson.com/todos/${id}`)
  const data = await response.json()
  return data // returns an object
}

const updateTodoById = async (id: string, formData: FormData) => {
  'use server'

  const formFields = {
    todo: formData.get('inputTodo')
  }

  const response = await fetch(`https://dummyjson.com/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formFields)
  })
  const data = await response.json()
  console.log(data)

  revalidatePath('/todos')
  redirect('/todos')
}

const page = async ({ params }: Props) => {
  const { id } = params
  const todoItem = await getTodoById(id)
  const updateTodoWithId = updateTodoById.bind(null, id)

  return (
    <div>
      <h1>Edit Todo</h1>
      <form action={updateTodoWithId}>
        <input type="text" name="inputTodo" className="text-black" defaultValue={todoItem.todo} />
        <button type="submit">SAVE</button>
      </form>
    </div>
  )
}

export default page