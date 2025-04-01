import React from 'react'

function Card({username, btn="visit me"}) {
    console.log(username)
  return (
    <>
    <div className="flex flex-col items-center gap-6 p-7 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/31098331/pexels-photo-31098331/free-photo-of-cozy-coffee-moment-with-magazine-and-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
  </div>
  <div className="flex items-center">
    <span className="text-2xl font-medium">{username}</span>
    <span className="font-medium text-sky-500">The Anti-Patterns</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>{btn}</span>
    </span>
  </div>
</div>
</>
  )
}

export default Card