import { api } from '../../lib/api'
import Link from 'next/link'
import { Mail, Phone, Globe, Building2 } from "lucide-react"

export default async function UsersPage() {
  const users = await api.users.list()

  return (
    <div className="p-6">
      <h2 className="text-3xl font-extrabold mb-6 text-center">👥 Users Directory</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((u: any) => (
          <div
            key={u.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition hover:scale-[1.01]"
          >
            <div className="card-body">
              {/* Header */}
              <h3 className="card-title">
                <Link href={`/users/${u.id}`} className="hover:underline">
                  {u.name}
                </Link>
              </h3>
              <p className="text-sm opacity-70">@{u.username}</p>

              {/* Contact info */}
              <div className="mt-3 space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" /> {u.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" /> {u.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Globe size={16} className="text-primary" /> {u.website}
                </p>
              </div>

              {/* Company */}
              <div className="mt-4 border-t pt-3">
                <p className="flex items-center gap-2 text-sm">
                  <Building2 size={16} className="text-secondary" />
                  <span className="font-medium">{u.company.name}</span>
                </p>
                <p className="text-xs opacity-70">{u.company.catchPhrase}</p>
              </div>

              {/* Action */}
              <div className="card-actions mt-4">
                <Link href={`/users/${u.id}`} className="btn btn-primary btn-sm">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
