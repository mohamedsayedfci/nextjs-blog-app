import { NextResponse } from 'next/server'

const BASE = 'https://jsonplaceholder.typicode.com'

// GET /api/posts/:id
export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const res = await fetch(`${BASE}/posts/${id}`)
  const data = await res.json()
  return NextResponse.json(data)
}

// PUT /api/posts/:id
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await req.json()
  const res = await fetch(`${BASE}/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  return NextResponse.json(data)
}

// PATCH /api/posts/:id
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await req.json()
  const res = await fetch(`${BASE}/posts/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  return NextResponse.json(data)
}

// DELETE /api/posts/:id
export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const res = await fetch(`${BASE}/posts/${id}`, { method: 'DELETE' })
  if (res.ok) {
    return NextResponse.json({ message: `Post ${id} deleted` })
  }
  return NextResponse.json({ error: 'Delete failed' }, { status: 500 })
}
