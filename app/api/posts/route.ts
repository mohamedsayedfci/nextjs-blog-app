import { NextResponse } from 'next/server'

const BASE = 'https://jsonplaceholder.typicode.com'

// GET /api/posts
export async function GET() {
  const res = await fetch(`${BASE}/posts`)
  const data = await res.json()
  return NextResponse.json(data)
}

// POST /api/posts
export async function POST(req: Request) {
  const body = await req.json()
  const res = await fetch(`${BASE}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  return NextResponse.json(data, { status: 201 })
}
