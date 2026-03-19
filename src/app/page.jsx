
import Link from 'next/link';
export default function HomePage() {
  return (
    <div>
      <h1 className='text-blue-500'>Bienvenido a la pagina de Albums</h1>
      <p>Esta es una aplicacion para practicar next js </p>
      <Link href="/album" className="text-blue-500 underline">
        Ver los Albums</Link>
    </div>
  )
}
