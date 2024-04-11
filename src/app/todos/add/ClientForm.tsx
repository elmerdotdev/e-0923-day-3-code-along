'use client'

import { FormEvent, useState } from 'react'

const ClientForm = () => {
  const [newTodo, setNewTodo] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(newTodo)
  }

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="text-black" />
        <button>Add</button>
      </form>
    </div>
  )
}

export default ClientForm