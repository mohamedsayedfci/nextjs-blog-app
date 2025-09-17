export type Post = { userId: number; id: number; title: string; body: string }
export type Comment = { postId: number; id: number; name: string; email: string; body: string }
export type User = { id: number; name: string; username: string; email: string }
export type Todo = { userId: number; id: number; title: string; completed: boolean }
export type Album = { userId: number; id: number; title: string }
export type Photo = { albumId: number; id: number; title: string; url: string; thumbnailUrl: string }

const BASE = 'https://jsonplaceholder.typicode.com'

async function fetchJSON<T>(path: string) {
  console.log(`${BASE}${path}`)
  const res = await fetch(`${BASE}${path}`)
  if (!res.ok) throw new Error(`Failed to fetch ${path}`)
  return (await res.json()) as T
}

export const api = {
  posts: {
    list: () => fetchJSON<Post[]>('/posts'),
    get: (id: number) => fetchJSON<Post>(`/posts/${id}`),
    comments: (postId: number) => fetchJSON<Comment[]>(`/posts/${postId}/comments`),
    create: (payload: Partial<Post>) => fetch(`${BASE}/posts`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).then(r => r.json())
  },
  users: {
    list: () => fetchJSON<User[]>('/users'),
    get: (id: number) => fetchJSON<User>(`/users/${id}`),
    todos: (id: number) => fetchJSON<Todo[]>(`/users/${id}/todos`),
    posts: (id: number) => fetchJSON<Post[]>(`/users/${id}/posts`)
  },
  todos: {
    list: () => fetchJSON<Todo[]>('/todos')
  },
  albums: {
    list: () => fetchJSON<Album[]>('/albums'),
    photos: (albumId: number) => fetchJSON<Photo[]>(`/albums/${albumId}/photos`),
    get: (id: number) => fetchJSON<Album>(`/albums/${id}`)
  }
}
