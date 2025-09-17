import './globals.css'
import Nav from '../components/Nav'

export const metadata = {
  title: 'JSONPlaceholder Demo',
  description: 'Next.js + TypeScript demo using jsonplaceholder.typicode.com'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-base-200">
          <Nav />
          <main className="container mx-auto p-4">{children}</main>
        </div>
      </body>
    </html>
  )
}
