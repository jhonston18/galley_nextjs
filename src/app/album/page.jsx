"use client"; // Obligatorio para usar useState y useRouter

import { useState, useEffect } from "react";
import Link from "next/link";
import { albums } from '@/app/album-fotos/album'
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function AlbumPage() {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Inicializamos el estado con lo que ya haya en la URL (si existe)
  const [query, setQuery] = useState(searchParams.get("search") || "");

  useEffect(() => {
    // Creamos un temporizador
    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (query) {
        params.set("search", query);
      } else {
        params.delete("search");
      }
      // Solo actualiza la URL una vez que el usuario deja de escribir
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 500); // 500 milisegundos de espera

    return () => clearTimeout(delayDebounceFn); // Limpiamos el timer si el usuario sigue escribiendo
  }, [query, pathname, router, searchParams]);


  const filterAlbum = albums.filter(album => {
    const searchTerm = query.toLowerCase()

    return (
      album.id.toString().includes(searchTerm)
      || album.name.toLowerCase().includes(searchTerm)
      || album.description.toLowerCase().includes(searchTerm)
      || album.year.toString().includes(searchTerm))
  })

  console.log(filterAlbum)

  return (
    <div>

      <input
        type="text"
        placeholder="Buscar album..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(5, 1fr)', gap: '10px' }}>

        {filterAlbum.length > 0 ? (

          filterAlbum.map((album, index) => (
            <div key={index} style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '10px', marginBottom: '10px', backgroundColor: '#f3f5d4' }}>
              <div>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={album.portain} alt={album.name} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>Nombre: {album.name}</span>
                <span>Cantidad: {album.photos.length} fotos</span>
                <span>Descripción: {album.description}</span>
              </div>
              <Link className='text-blue-600' href={`/album/${album.id}`} >
                ver foto
              </Link>
            </div>
          ))
        ) : (
           albums.map((album, index) => (
            <div key={index} style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '10px', marginBottom: '10px', backgroundColor: '#f3f5d4' }}>
              <div>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={album.portain} alt={album.name} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>Nombre: {album.name}</span>
                <span>Cantidad: {album.photos.length} fotos</span>
                <span>Descripción: {album.description}</span>
              </div>
              <Link className='text-blue-600' href={`/album/${album.id}`} >
                ver foto
              </Link>
            </div>
          ))
        
        )}
      </div>
    </div>
  )
}