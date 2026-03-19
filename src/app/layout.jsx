


import './globals.css';

export const metadata = {
  title: "my app next js",
  description: "aprendiendo metadata en next js",
  keywords: 'next js, metadata, tutorial',
  authors: [{ name: 'Unicode_dev', url: 'https://github.com/Unicode_dev' }]
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className="h-full">

      <body className="h-full">
        
        <nav className="p-5">
          <h2 className="text-blue-500">My app de usuarios</h2>
        </nav>

        <main className="p-5">
          {children}
        </main>

      </body>
    </html>
  )
}