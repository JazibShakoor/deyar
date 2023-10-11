import React from 'react'

const danubeRequest = (item) => {
  return (
    <div className='w-40 h-40 shadow-lg bg-white flex justify-center items-center flex-col gap-4 rounded-md' >
        <img src={item.title}  className='w-20 h-20'/>
        <span>{item.name}</span>
        <span>{item.paragraph}</span>
        <span>{item.price}</span>
        <span>{item.desc}</span>
    </div>
  )
}

export default danubeRequest