"use client";
import React from 'react'
import Image from 'next/image'

interface ProductCardProps {
    imgUrl: string;
    productName: string;
    productDesc: string;
    size: string;
}

const ProductCard = ({ imgUrl, productName, productDesc, size }: ProductCardProps ) => {

  return (
    <div className={`col-span-1 ${size} bg-white border border-neutral-200 flex flex-col items-center rounded-md overflow-hidden group hover:shadow-lg hover:scale-101 md:hover:scale-105 hover:border-0 ease-out duration-200`}>
        <div className='h-3/5 w-full flex items-center justify-center'>
            <div className='h-40 w-3/4 rounded-md bg-neutral-200 relative'>
                <Image
                    height={500}
                    width={500}
                    alt='ontap creatives cards'
                    src={imgUrl}
                    className='w-64 aspect-square object-contain pt-5 object-center -mt-16 group-hover:scale-110 ease-out duration-200'
                />
            </div>
        </div>
        <h2 className='text-xl font-bold'>{productName}</h2>
        <p className='mt-3 mb-5 px-5 text-justify group-hover:px-5.5 ease-out duration-200'>{productDesc}</p>
      
        <button 
            className='mt-auto py-4 bg-light-blue w-full font-semibold hover:bg-blue focus:bg-dark-blue focus:text-white ease-out duration-200'>INQUIRE NOW</button>
    </div>
  )
}

export default ProductCard