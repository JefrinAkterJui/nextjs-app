import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata={
  title:"Gallery"
}
const GalleryPage = () => {
  return (
    <div>
        <h1 className='text-4xl text-center'>App Imge</h1>
        {/* <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUYlc456G70wXkzfSb2YKWF_vZLTzslEZpg&s" alt="next.js" 
            width={500}
            height={500}
            className='mx-auto'
        /> */}
        <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUYlc456G70wXkzfSb2YKWF_vZLTzslEZpg&s" alt="next.js" 
            width={500}
            height={500}
            className='mx-auto'
        />
    </div>
  )
}

export default GalleryPage