import Link from "next/link"

type Todo = {
  id: number
  todo: string
  completed: boolean
}

const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch('https://dummyjson.com/todos')
  const data = await response.json()
  return data.todos // returns an array
}

const TodoList = async () => {
  const todos = await getTodos()

  return (
    <div>
      <ul>
        {todos.map((todoItem) => (
          <li key={todoItem.id} className="flex justify-between">
            <span>{todoItem.todo}</span>
            <div className="flex gap-2">
              <Link href={`/todos/edit/${todoItem.id}`} className="underline">Edit</Link>
              <Link href={`/todos/delete/${todoItem.id}`} className="underline">Delete</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList