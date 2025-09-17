import { NextResponse } from 'next/server'
const BASE = 'https://jsonplaceholder.typicode.com'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const postId = searchParams.get('postId')
  const url = postId ? `${BASE}/comments?postId=${postId}` : `${BASE}/comments`
  const res = await fetch(url)
  const data = await res.json()
  return NextResponse.json(data)
}

export async function POST(req: Request) {
  const body = await req.json()
  const res = await fetch(`${BASE}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  const data = await res.json()
  return NextResponse.json(data, { status: 201 })
}
