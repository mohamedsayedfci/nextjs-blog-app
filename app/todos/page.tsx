import { api } from '../../lib/api'
import TodoCard from '../../components/TodoCard'
import TodoClient from '../../components/TodoClient'

export default async function TodosPage() {
  const todos = await api.todos.list()

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📝 Todos</h1>
      <TodoClient/>
      {/* <div className="grid gap-4 md:grid-cols-3">
        {todos.slice(0, 60).map((t) => (
          <TodoCard key={t.id} title={t.title} completed={t.completed} />
        ))}
      </div> */}
    </div>
  )
}
