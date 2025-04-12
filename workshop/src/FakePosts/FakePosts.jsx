import React from 'react'
import { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const FakePosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error))
    }, [])
  return (
    <div>

        <h1>Random Images</h1>
        {ImageTrackList.length=== 0? (
            <p>Loading images...</p>
        ):(
            <div style={{display: 'flex', flexWrap:'wrap', gap:'10px',}}></div>
        )}
    </div>
  )
}
