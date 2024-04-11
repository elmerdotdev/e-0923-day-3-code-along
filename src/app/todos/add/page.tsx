import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const createTodo = async (formData: FormData) => {
  'use server'
  const formFields = {
    todo: formData.get('newTodo'),
    userId: 1
  }

  const response = await fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    body: JSON.stringify(formFields),
    headers: { 'Content-Type': 'application/json' },
  })
  const data = await response.json()
  console.log(data)

  revalidatePath('/todos') // clear the todos page cache
  redirect('/todos')
}

const page = () => {
  return (
    <div>
      <h1>Add New Todo</h1>
      <form action={createTodo}>
        <input type="text" name="newTodo" className="text-black" />
        <button type="submit">ADD</button>
      </form>
    </div>
  )
}

export default page