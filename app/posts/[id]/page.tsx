import AddCommentForm from '../../../components/AddCommentForm'
import CommentList from '../../../components/CommentList'
import { api } from '../../../lib/api'


export default async function PostDetail({ params }: { params: any }) {
  const id = Number(params.id)
  const post = await api.posts.get(id)
  const comments = await api.posts.comments(id)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">{post.title}</h2>
      <p className="mt-2">{post.body}</p>

      <section className="mt-6">
      <h3 className="font-medium text-lg">Comments</h3>
      <CommentList comments={comments} />

      <div className="mt-4">
        <AddCommentForm postId={id} />
      </div>
    </section>
    </div>
  )
}
