"use client"

import { useEffect, useMemo, useState } from "react"
import { CheckCircle, Circle, Search, Inbox } from "lucide-react"

type Todo = { userId: number; id: number; title: string; completed: boolean }

export default function TodoClient() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "done" | "pending">("all")
  const [search, setSearch] = useState("")

  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=100")
      .then((r) => r.json())
      .then((data: Todo[]) => setTodos(data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const toggle = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const filtered = useMemo(() => {
    let result = todos
    if (filter === "done") result = result.filter((t) => t.completed)
    if (filter === "pending") result = result.filter((t) => !t.completed)
    if (search.trim())
      result = result.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
      )
    return result
  }, [todos, filter, search])

  if (loading)
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-ring loading-lg text-primary"></span>
      </div>
    )

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold">
          Your Todos{" "}
          <span className="text-base font-normal opacity-60">
            ({filtered.length}/{todos.length})
          </span>
        </h1>

        {/* Search box */}
        <label className="input input-bordered flex items-center gap-2 w-full sm:w-64">
          <Search size={16} />
          <input
            type="text"
            className="grow"
            placeholder="Search todos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {["all", "done", "pending"].map((f) => (
          <button
            key={f}
            className={`btn btn-sm capitalize ${
              filter === f ? "btn-primary" : "btn-ghost"
            }`}
            onClick={() => setFilter(f as any)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Todos Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((todo) => (
          <div
            key={todo.id}
            className={`card shadow-md transition hover:scale-[1.02] hover:shadow-lg border-l-4 ${
              todo.completed ? "border-success" : "border-info"
            }`}
          >
            <div className="card-body p-4 flex-row items-start gap-3">
              {/* Status Icon */}
              {todo.completed ? (
                <CheckCircle className="text-success shrink-0" />
              ) : (
                <Circle className="text-info shrink-0" />
              )}

              {/* Content */}
              <div className="flex-1">
                <h4
                  className={`font-medium ${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.title}
                </h4>
                <p className="text-xs opacity-70">Task #{todo.id}</p>
              </div>

              {/* Action */}
              <button
                className={`btn btn-xs ${
                  todo.completed ? "btn-outline btn-success" : "btn-outline btn-info"
                }`}
                onClick={() => toggle(todo.id)}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center py-20 opacity-70">
          <Inbox size={48} className="mb-2" />
          <p>No todos found</p>
        </div>
      )}
    </div>
  )
}
