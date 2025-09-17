import { api } from '../../../lib/api'
import PhotoCard from '../../../components/PhotoCard'


export default async function AlbumDetail({ params }: { params: any }) {
  const id = Number(params.id)
  const album = await api.albums.get(id)
  const photos = await api.albums.photos(id)

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">📸 {album.title}</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {photos.slice(0, 12).map((p) => (
          <PhotoCard
            key={p.id}
            title={p.title}
            thumbnailUrl={p.thumbnailUrl}
            url={p.url}
          />
        ))}
      </div>
    </div>
  )
}
