


export const metadata = {
  title: "my app next js",
  description: "aprendiendo metadata en next js",
  keywords: 'next js, metadata, tutorial',
  authors: [{ name: 'Unicode_dev', url: 'https://github.com/Unicode_dev' }]
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>

      <body>
        
        <nav style={{ padding: '20px', backgroundColor: '#fofofo' }}>
          <h2>My app de usuarios</h2>
        </nav>

        <main style={{ padding: '20px' }}>
          {children}
        </main>

      </body>
    </html>
  )
}