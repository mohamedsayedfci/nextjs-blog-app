type TodoCardProps = {
  title: string
  completed: boolean
}

export default function TodoCard({ title, completed }: TodoCardProps) {
  return (
    <div className="card bg-base-100 shadow-sm border rounded-lg p-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{title}</span>
        {completed ? (
          <span className="badge badge-success">Done</span>
        ) : (
          <span className="badge badge-warning">Pending</span>
        )}
      </div>
    </div>
  )
}
