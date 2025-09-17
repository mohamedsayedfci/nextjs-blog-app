import Link from "next/link"
import { FileText, Users, Image, CheckSquare } from "lucide-react"

export default function Home() {
  const links = [
    { href: "/posts", label: "Posts", icon: FileText },
    { href: "/users", label: "Users", icon: Users },
    { href: "/albums", label: "Albums", icon: Image },
    { href: "/todos", label: "Todos", icon: CheckSquare },
  ]

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          🚀 JSONPlaceholder Demo
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A small demo using the new <code className="px-1 bg-gray-100 rounded">app/</code>{" "}
          router and TypeScript, styled with Tailwind & DaisyUI.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="card bg-base-100 shadow-md hover:shadow-xl transition-transform hover:scale-105"
          >
            <div className="card-body items-center text-center">
              <Icon className="w-8 h-8 text-primary mb-2" />
              <h2 className="card-title text-lg">{label}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
