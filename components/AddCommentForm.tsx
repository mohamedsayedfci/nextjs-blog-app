'use client'

import React from 'react'

export default function AddCommentForm({ postId }: { postId: number }) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [body, setBody] = React.useState('')
  const [result, setResult] = React.useState<any>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ postId, name, email, body }),
    })
    const json = await res.json()
    setResult(json)
    setName('')
    setEmail('')
    setBody('')
  }

  return (
    <form onSubmit={submit} className="card p-3 mt-4">
      <h4 className="font-medium">Add comment</h4>
      <input
        className="input input-bordered w-full mt-2"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input input-bordered w-full mt-2"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="textarea textarea-bordered w-full mt-2"
        placeholder="comment"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="mt-2">
        <button className="btn btn-primary btn-sm" type="submit">
          Add
        </button>
      </div>
      {result && (
        <pre className="mt-2 p-2 bg-base-200 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </form>
  )
}
