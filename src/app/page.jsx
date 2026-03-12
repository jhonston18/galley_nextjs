
import Link from 'next/link';
export default function HomePage() {
  return (
    <div>
      <h1>Bienvenido a la pagina de Albums</h1>
      <p>Esta es una aplicacion para practicar next js </p>
      <Link href="/album" style={{ color: 'blue', textDecoration: 'underline' }}>
        Ver los Albums</Link>
    </div>
  )
}
