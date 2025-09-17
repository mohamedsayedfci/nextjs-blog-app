import PostList from "../../../components/PostList";
import TodoCard from "../../../components/TodoCard";
import { api } from "../../../lib/api";
import { Mail, Phone, Globe, Building2, MapPin } from "lucide-react";

type Props = { params: { id: string } };

export default async function UserDetail({ params }: Props) {
  const id = await Number(params.id);
  const user = await api.users.get(id);
  const posts = await api.users.posts(id);
  const todos = await api.users.todos(id);

  return (
    <div className="p-6 space-y-6">
      {/* Profile card */}
      <section className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">{user.name}</h2>
          <p className="text-sm opacity-70">@{user.username}</p>

          {/* Contact info */}
          <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-primary" /> {user.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-primary" /> {user.phone}
            </p>
            <p className="flex items-center gap-2">
              <Globe size={16} className="text-primary" /> {user.website}
            </p>
            <p className="flex items-center gap-2">
              <Building2 size={16} className="text-secondary" />
              {user.company.name}
            </p>
          </div>

          {/* Address */}
          <div className="mt-4 border-t pt-3">
            <p className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-error" />
              {user.address.street}, {user.address.suite}, {user.address.city} (
              {user.address.zipcode})
            </p>
            <p className="text-xs opacity-70">
              Geo: {user.address.geo.lat}, {user.address.geo.lng}
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <PostList posts={posts} limit={12} />

      {/* Todos */}
      <section className="mt-6">
        <h3 className="font-medium text-lg mb-3">Todos</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {todos.map((t) => (
            <TodoCard key={t.id} title={t.title} completed={t.completed} />
          ))}
        </div>
      </section>
    </div>
  );
}
