import React from 'react';
import Image from 'next/image';

const ClientList = () => {
  return (
    <div className='h-auto w-full bg-light-blue grid grid-cols-3 md:grid-cols-5 md:px-64 gap-3 md:gap-5 p-3'>
        {Array.from({length: 15}).map((_, i) => (
            <span 
                key={i}
                className='h-20 md:h-32 col-span-1 flex items-center justify-center'
            >
                <Image
                    height={512}
                    width={512}
                    alt='Client Logos'
                    src={`/images/client-logos/sponsor-${i+1}.png`}
                    className='h-full w-full scale-80 object-contain object-center'
                />
            </span>
        ))}
    </div>
  )
}

export default ClientList