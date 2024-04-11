import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

type Props = {
  params: {
    id: string
  }
}

const deleteTodo = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/todos/${id}`, {
    method: 'DELETE'
  })
  const data = await response.json()
  console.log('ITEM DELETED!')
  console.log(data)

  revalidatePath('/todos')
  redirect('/todos')
}

const page = async ({ params }: Props) => {
  const { id } = params
  await deleteTodo(id)

  return (
    <div>DELETE ITEM: {id}</div>
  )
}

export default page