import { api } from '../../lib/api'
import Link from 'next/link'

export default async function AlbumsPage() {
  const albums = await api.albums.list()

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">🎵 Albums</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {albums.slice(0, 24).map((a) => (
          <Link
            key={a.id}
            href={`/albums/${a.id}`}
            className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-xl"
          >
            <div className="card-body">
              <h3 className="card-title text-base line-clamp-2">{a.title}</h3>
              <p className="text-sm text-gray-500">Album #{a.id}</p>
              <div className="card-actions mt-3">
                <button className="btn btn-primary btn-sm">View Photos</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
