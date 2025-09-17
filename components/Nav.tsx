import Link from 'next/link'
export default function Nav(){
  return (
    <nav className="navbar bg-base-100 shadow-sm mb-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="font-bold">JSONPlaceholder</div>
          <div className="flex gap-4">
            <Link className="btn btn-ghost btn-sm" href="/">Home</Link>
            <Link className="btn btn-ghost btn-sm" href="/posts">Posts</Link>
            <Link className="btn btn-ghost btn-sm" href="/users">Users</Link>
            <Link className="btn btn-ghost btn-sm" href="/albums">Albums</Link>
            <Link className="btn btn-ghost btn-sm" href="/todos">Todos</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
