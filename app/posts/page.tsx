import PostList from "../../components/PostList";
import { api } from "../../lib/api";
import CreatePostForm from "./CreatePostForm";

export default async function PostsPage() {
  const posts = await api.posts.list();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">📚 Posts</h1>

      {/* Create Post Form */}
      <div className="card bg-base-200 shadow-xl p-4">
        <CreatePostForm />
      </div>

      {/* Posts List */}
      <PostList posts={posts} limit={100} />
    </div>
  );
}
