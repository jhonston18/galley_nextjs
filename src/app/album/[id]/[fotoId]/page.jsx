
import { albums } from "@/app/album-fotos/album"
import Link from "next/link"

export default async function Photo({ params }) {

    const { id, fotoId } = await params
    const photoId = parseInt(fotoId)

    const album = albums.find(album => album.id === parseInt(id))

    if (!album) {
        return (<h1>Album no encontrado</h1>)
    }

    const photos = album.photos
    const currentIndex = photos.findIndex(p => p.id === photoId)
    const photo = photos[currentIndex]

    console.log(photos.length)

    if (!photo) {
        return (<h1>Foto no encontrada</h1>)
    }

    const prevPhoto = photos[(currentIndex - 1 + photos.length) % photos.length]
    const nextPhoto = photos[(currentIndex + 1) % photos.length]

    return (
        <div style={{ width: '420px', height: '400px', padding: '20px', backgroundColor: '#f3f5d4', borderRadius: '5px', border: '1px solid #ccc' }}>
            <div style={{ width: '380px', height: '350px' }}>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={photo.url} alt={photo.description} />
            </div>
            <div className="flex flex-col gap-3">
                <span>{photo.description}</span>
                <h2>Foto actual: {fotoId}</h2>
                <Link href={`/album/${id}`} className="bg-blue-500 text-white">
                    <button>
                        Volver al inicio
                    </button>
                </Link>

                {prevPhoto ? (<Link className="text-blue-700" href={`/album/${id}/${prevPhoto.id}`}>Anterior</Link>) : <div />}
                {nextPhoto ? (<Link className="text-blue-700" href={`/album/${id}/${nextPhoto.id}`}>Siguiente</Link>) : <div />}
            </div>


            {/**2 < 3 --> true --> siguiente */}
            {/**3 === 3 || 2 < 3 --> true --> anterior */}



        </div>
    )
}

