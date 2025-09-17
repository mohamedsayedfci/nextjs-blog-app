// components/comments/CommentCard.tsx
type CommentCardProps = {
  name: string
  body: string
}

export default function CommentCard({ name, body }: CommentCardProps) {
  return (
    <div className="card p-3 shadow-sm bg-base-100">
      <strong className="block text-sm font-semibold">{name}</strong>
      <p className="mt-1 text-sm text-gray-700">{body}</p>
    </div>
  )
}
