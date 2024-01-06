import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-center items-center m-2 fixed z-10 w-full'>
    <div className=' bg-black bg-opacity-45 w-9/12 h-20 flex items-center justify-between '>
      <a href="#home"><img src="logo.png" alt="" className=' h-16 hover:cursor-pointer' /></a>
      <div className=' mx-10 flex gap-10'>
        <a href="#home">Home</a>
        <a href="#playlist">Playlist</a>
        <a href="#contact">about us</a>
      </div>
    </div>
    </div>
  )
}

export default Nav