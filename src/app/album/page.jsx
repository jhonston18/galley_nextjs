
import { albums } from '@/app/album-fotos/album';
import Link from 'next/link';


export default async function AlbumPage() {

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(5, 1fr)', gap: '10px' }}>
      {albums.map((album, index) => (
        <div key={index} style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '10px', marginBottom: '10px', backgroundColor: '#f3f5d4' }}>
          <div>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={album.portain} alt={album.name} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Nombre: {album.name}</span>
            <span>Cantidad: {album.photos.length} fotos</span>
            <span>Descripción: {album.description}</span>
          </div>
          <Link href={`/album/${album.id}`} >
            ver foto
          </Link>
        </div>

      ))}
    </div>
  )
}