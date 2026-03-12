
import { albums } from "@/app/album-fotos/album"

export default async function Photo({ params }){

    const { id, fotoId } = await params

    const album = albums.find(album => album.id === parseInt(id))

    if(!album) {
        return ( <h1>Album no encontrado</h1> )
    }

    const photos = album.photos
    const photo = photos.find(p => p.id === parseInt(fotoId))

    if(!photo) {
        return ( <h1>Foto no encontrada</h1> )
    }

    return (
        <div style={{ width: '400px', height: '400px', padding: '20px', backgroundColor: '#f3f5d4', borderRadius: '5px', border: '1px solid #ccc' }}>
            <div style={{ width: '380px', height: '350px'}}>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={photo.url} alt={photo.description} />
            </div>
            <span>{photo.description}</span>
        </div>
    )
}