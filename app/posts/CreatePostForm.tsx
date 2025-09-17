"use client"

import { useState } from "react"
import axios from "axios"
import { api } from "../../lib/api"

export default function CreatePostForm() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
        const posts = await api.posts.create({ title, body, userId: 1 });
      
    
      alert("✅ Post created successfully!")
      setTitle("")
      setBody("")
    } catch (err) {
      console.error(err)
      alert("❌ Failed to create post")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-control space-y-4">
      <input
        type="text"
        placeholder="Post title"
        className="input input-bordered w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Post body"
        className="textarea textarea-bordered w-full"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button className="btn btn-primary" disabled={loading}>
        {loading ? "Publishing..." : "Publish Post"}
      </button>
    </form>
  )
}
