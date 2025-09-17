import Link from "next/link"

type PostCardProps = {
  id: number
  title: string
  body: string
}

export default function PostCard({ id, title, body }: PostCardProps) {
  return (
    <Link href={`/posts/${id}`} className="block">
      <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-xl">
        <div className="card-body">
          <h4 className="card-title text-lg font-semibold line-clamp-1">{title}</h4>
          <p className="text-sm text-gray-600 line-clamp-3">{body}</p>
          <div className="card-actions mt-3">
            <button className="btn btn-primary btn-sm">Read More</button>
          </div>
        </div>
      </div>
    </Link>
  )
}
