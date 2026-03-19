'use client'

import NotFound from '@/app/not-found';

import { albums } from '@/app/album-fotos/album';
import { use, useState, useEffect } from 'react';




export default function PhotoAlbum({ params }) {

    const resolveParams = use(params)
    const id = parseInt(resolveParams.id)
    

    const album = albums.find(album => album.id === parseInt(id));

    if (!album) {
        return (
            <h1>Album no encontrado</h1>
        )
    }

    const { name, description, id: numberFoto, photos: fotos } = album;

    

    console.log(album)

    return (
        <div>
            <div>
                <h1>Nombre del album: {name}</h1>
                <p>Descripcion del album: {description}</p>
                <span>Numero del album: {numberFoto}</span>
            </div>
            <div style={{ display: 'grid', gridTemplate: '1fr 1fr 1fr / 1fr 1fr 1fr 1fr 1fr 1fr', gap: '10px' }}>
                {fotos.map((foto) => (
                    <div key={foto.id} style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '10px', marginBottom: '10px', backgroundColor: '#f3f5d4' }}>
                        <div style={{ width: '200px', height: '200px' }}>
                            <img style={{ width: '100%', height: '100%', objectFit: 'scale-down' }} src={foto.url} alt="Photo" />
                        </div>
                        <span>{foto.description}</span>
                        <button onClick={() => window.location.href = `/album/${album.id}/${foto.id}`} style={{ margin: '5px', padding: '10px', backgroundColor: '#24f', color: '#fff', border: 'none' }}>Ver detalles</button>

                    </div>
                ))}

            </div>
        </div>
    )
}
