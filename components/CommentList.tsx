
import CommentCard from "./ommentCard"

type Comment = {
  id: number
  name: string
  body: string
}

type CommentListProps = {
  comments: Comment[]
}

export default function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return <p className="text-sm text-gray-500">No comments yet. Be the first!</p>
  }

  return (
    <div className="mt-2 space-y-2">
      {comments.map((c) => (
        <CommentCard key={c.id} name={c.name} body={c.body} />
      ))}
    </div>
  )
}
