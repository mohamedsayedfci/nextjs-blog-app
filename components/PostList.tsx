import PostCard from './PostCard'

type Post = {
  id: number
  title: string
  body: string
}

type Props = {
  posts: Post[]
  limit?: number
}

export default function PostList({ posts, limit = 6 }: Props) {
  return (
    
    <section>
      <h3 className="font-medium text-lg mb-4">Posts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {posts.slice(0, limit).map((p) => (
          <PostCard key={p.id} id={p.id} title={p.title} body={p.body} />
        ))}
      </div>
    </section>
  )
}
