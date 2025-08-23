import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='h-auto w-full md:w-3/4 bg-white px-5 md:px-10 flex flex-col py-16 font-bold gap-10 md:gap-20 items-center'>
        <div className='w-full flex flex-col gap-3 mr-auto'>
            <h2 className='text-2xl md:text-3xl'><span className='text-dark-blue'>Elevate</span> your networking game with our cutting-edge <span className='text-dark-blue'>Smart Business Card</span></h2>
            <p className='text-md text-justify md:text-lg'>A smart business card is a game-changer in the digital era, revolutionizing the way we network and connect. This cutting-edge innovation seamlessly combines technology and connectivity to make you stand out from the crowd, It allows you to showcase your creativity and uniqueness, setting you apart from the competition. By effortlessly sharing your contact information, social media profiles, and portfolio with a simple tap or scan, you can effortlessly expand your network and foster meaningful relationships. These connections can open doors to new opportunities and collaborations, bringing success to your professional endeavors. In this rapidly evolving world, a smart business card is an essential tool for any ambitious individual looking to thrive in the digital landscape.</p>
        </div>
        <div className='h-auto w-full md:w-3/4 flex flex-col md:flex-row gap-5 items-center'>
            <div className='h-96 w-3/4 md:min-w-1/3 rounded-xl bg-gray-300'></div>
            <div className='w-auto flex flex-col gap-3'>
                <h3 className='text-3xl md:text-5xl'>Why Choose <span className='text-dark-blue'>OnTap Business card?</span></h3>
                <p className='text-base text-justify md:text-lg'>Smart business cards are a valuable tool for professionals looking to make a lasting impression. With their sleek design and innovative features, you are embracing technology, efficiency, and sustainability, all while making a memorable impact in the business world.</p>
            </div>  
        </div>
        <div className='w-full flex flex-col md:flex-row gap-5 md:gap-20'>
            <div className='flex gap-3 md:gap-5 flex-col md:flex-row md:w-2/3'>
                <Image
                    height={500}
                    width={500}
                    alt='ontap creatives cards'
                    src='/images/about-img-1.png'
                    className='h-64 md:h-auto w-full md:w-64 object-cover pt-5 object-center rounded-lg -mt-3'
                />
                <span className='h-full md:py-5'>
                    <h4 className='text-dark-blue text-xl md:text-2xl'>Grow your Sphere of Influence</h4>
                    <p className='text-base text-justify md:text-lg'>Your network is your net worth. Utilize our digital business card to connect with like-minded individuals, industry leaders, and potential collaborators. Cultivate relationships that drive success and propel your career forward.</p>
                </span>
            </div>
            <div className='flex flex-col gap-3 md:gap-5 items-start md:flex-row md:w-2/3'>
                <Image
                    height={500}
                    width={500}
                    alt='ontap creatives cards'
                    src='/images/about-img-2.png'
                    className='h-64 md:h-auto w-full md:w-64 object-cover pt-5 object-center rounded-lg -mt-3'
                />
                <span className='h-full md:py-5'>
                    <h4 className='text-dark-blue text-xl md:text-2xl'>Seamless Connectivity</h4>
                    <p className='text-base text-justify md:text-lg'>Stay linked effortlessly! Share your digital business card instantly, allowing contacts to access your professional profile, social media, and contact details with a simple click. The power of connection is just a tap away.</p>
                </span>
            </div>
        </div>
        
    </div>
  )
}

export default About