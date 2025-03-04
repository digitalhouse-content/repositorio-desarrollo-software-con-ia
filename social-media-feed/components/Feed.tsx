"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Post from "./Post"

interface PostData {
  id: number
  content: string
  image?: string
}

export default function Feed() {
  const [posts, setPosts] = useState<PostData[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const loaderRef = useRef(null)

  const fetchPosts = useCallback(async () => {
    setLoading(true)
    // Simulate API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const newPosts = Array.from({ length: 10 }, (_, i) => ({
      id: (page - 1) * 10 + i + 1,
      content: `This is post number ${(page - 1) * 10 + i + 1}`,
      image: i % 2 === 0 ? `/placeholder.svg?height=300&width=400` : undefined,
    }))
    setPosts((prevPosts) => [...prevPosts, ...newPosts])
    setPage((prevPage) => prevPage + 1)
    setLoading(false)
  }, [page])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchPosts()
        }
      },
      { threshold: 1.0 },
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => observer.disconnect()
  }, [loading, fetchPosts])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post key={post.id} content={post.content} image={post.image} />
      ))}
      <div ref={loaderRef} className="h-10 flex items-center justify-center">
        {loading && <p className="text-gray-600 dark:text-gray-400">Loading more posts...</p>}
      </div>
    </div>
  )
}

