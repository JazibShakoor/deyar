import React from 'react'

const Amenities = ({item}) => {
  return (
    <div className='w-40 h-40 shadow-lg bg-white flex justify-center items-center flex-col gap-4 rounded-md' >
        <img src={item.image}  className='w-20 h-20'/>
        <span>{item.name}</span>
    </div>
  )
}

export default Amenities