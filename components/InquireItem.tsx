"use client"

import React, { useRef, useState } from 'react'
import ProductCard from './ProductCard'
import { ProductCardProps, ProductProps } from '@/types';
import { HiOutlineArrowLongRight, HiOutlineGlobeAlt, HiOutlineXMark, HiPhone } from 'react-icons/hi2';
import Image from 'next/image';
import { FaFacebookSquare } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import emailjs from 'emailjs-com';

type ProdCard = ProductCardProps & ProductProps;

const InquireItem = ({ imgUrl, productName, productDesc, size, setInquireItem, inquire, hoverable }: ProdCard) => {
  const [step, nextStep] = useState(0);
  const [userInfo, storeUserInfo] = useState({
    name: '',
    contact: '',
    email: '',
    subject: `Product Inquiry: ${productName}`,
  });
  const [emailContent, setEmailContent] = useState(<>
                    Hello <strong>OnTap Sales/Marketing Team</strong>,
                    <br /><br />
                    I hope this message finds you well. I am reaching out to inquire about the availability and details of your <strong>{productName} OnTap Card</strong> product. Could you kindly provide me with information regarding:
                    <br /><br />
                    <ul className="list-disc list-inside space-y-2 pl-3">
                        <li>Pricing for different quantities</li>
                        <li>Available sizes and material options</li>
                        <li>Estimated production and delivery time</li>
                    </ul>
                    <br />
                    If there are any design guidelines or minimum order requirements, I would also appreciate it if you could share those details.
                    <br /><br />
                    Thank you in advance for your assistance. I look forward to your reply.
                    <br /><br />
                    Best regards,
                    <br />
                    <strong className='capitalize'>{userInfo.name}</strong>
                    <br />
                    <strong>{userInfo.contact}</strong>
                    <br />
                    <strong className='lowercase'>{userInfo.email}</strong>
                </>);
  const emailRef = useRef<HTMLDivElement | null>(null);
  
  const getInputs = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    storeUserInfo((prev) => ({
        ...prev,
        [name]: value,
    }));
  }

    const submitEmail = async () => {
        if (!userInfo.name || !userInfo.contact || !userInfo.email) {
            alert("Please fill out all required fields.");
            return;
        }
        if (step !== 1) {
            nextStep(1);
            setEmailContent(
                <>
                    Hello <strong>OnTap Sales/Marketing Team</strong>,
                    <br /><br />
                    I hope this message finds you well. I am reaching out to inquire about the availability and details of your <strong>{productName} OnTap Card</strong> product. Could you kindly provide me with information regarding:
                    <br /><br />
                    <ul className="list-disc list-inside space-y-2 pl-3">
                        <li>Pricing for different quantities</li>
                        <li>Available sizes and material options</li>
                        <li>Estimated production and delivery time</li>
                    </ul>
                    <br />
                    If there are any design guidelines or minimum order requirements, I would also appreciate it if you could share those details.
                    <br /><br />
                    Thank you in advance for your assistance. I look forward to your reply.
                    <br /><br />
                    Best regards,
                    <br />
                    <strong className='capitalize'>{userInfo.name}</strong>
                    <br />
                    <strong>{userInfo.contact}</strong>
                    <br />
                    <strong className='lowercase'>{userInfo.email}</strong>
                </>
            )
        } else {
            const messageHtml = emailRef.current?.innerHTML || '';

            const templateParams = {
                email: userInfo.email,
                name: userInfo.name,
                time: new Date().toLocaleString(),
                subject: userInfo.subject,
                message: messageHtml,
            };

            try {
                const result = await emailjs.send(
                    'burnboxEmailService@123',
                    'template_sbeswfo',
                    templateParams,
                    'vs6X5XrbzSpZ_wr84' 
                );
                console.log('Email sent:', result.text);
                
                alert('Message sent successfully!');

                nextStep(0);

                storeUserInfo({
                    name: '',
                    contact: '',
                    email: '',
                    subject: `Product Inquiry: ${productName}`,
                });
            } catch (error) {
                console.error('Email sending error:', error);
                alert(error);
            }
        }
    };

  return (
    <div className='h-full w-full fixed top-0 left-0 bg-white/15 backdrop-blur-md z-100 flex items-center justify-center'>
        <div className='md:w-3/4 lg:w-1/2 h-2/3 rounded-xl bg-white shadow-md flex p-3'>
            <ProductCard  
              imgUrl={imgUrl}
              productName={productName}
              productDesc={productDesc}
              size={size}
              setInquireItem={setInquireItem} 
              inquire={inquire}
              hoverable={hoverable}
            />
            <div className='h-full w-3/5 flex flex-col items-end gap-5'>
                <span className='w-full flex justify-between items-start'>
                    <span className='flex gap-3 items-center ml-10 mt-3'>
                        <Image
                            alt='gmail icon'
                            height={500}
                            width={500}
                            src='/icons/gmaillogo.png'
                            className='w-8 aspect-square object-contain object-center'
                        />
                        <p className='font-semibold'>Leave Us a Message</p>
                    </span>
                    <button 
                        type="button"
                        className='text-3xl text-neutral-400 rounded-full hover:bg-light-blue hover:text-rose-300 focus:bg-blue focus:text-rose-500 ease-out duration-200'
                    ><HiOutlineXMark /></button>
                </span>
                <div className='h-full w-full px-10 flex flex-col gap-3 overflow-hidden mt-10'>
                    { step === 0 && (
                        <>
                            <span className='px-5 py-3 rounded-md border border-neutral-200'>
                                <input 
                                    name='name'
                                    type="text" 
                                    placeholder='Name'
                                    value={userInfo.name}
                                    onChange={getInputs}
                                    className='h-full w-full outline-none'
                                />
                            </span>
                            <span className='px-5 py-3 rounded-md border border-neutral-200'>
                                <input 
                                    name='contact'
                                    type="text" 
                                    placeholder='Contact Number'
                                    value={userInfo.contact}
                                    onChange={getInputs}
                                    className='h-full w-full outline-none'
                                />
                            </span>
                            <span className='px-5 py-3 rounded-md border border-neutral-200'>
                                <input 
                                    name='email'
                                    type="email" 
                                    placeholder='Email Address'
                                    value={userInfo.email}
                                    onChange={getInputs}
                                    className='h-full w-full outline-none'
                                />
                            </span>
                        </>
                    )}
                    { step === 1 && (
                        <>
                            <span className='px-5 py-3 rounded-md border border-neutral-200'>
                                <input 
                                    name='subject'
                                    type="text" 
                                    placeholder='Subject'
                                    value={userInfo.subject}
                                    onChange={getInputs}
                                    className='h-full w-full outline-none'
                                />
                            </span>
                            <div
                                ref={emailRef}
                                contentEditable
                                suppressContentEditableWarning
                                className="overflow-x-hidden px-5 py-3 rounded-md border border-neutral-200 outline-none min-h-[200px] whitespace-pre-wrap"
                            >
                                {emailContent}
                            </div>
                        </>
                    )}
                    <span className='w-full flex justify-end gap-2 mt-5'>
                        { step === 1 && (
                            <button 
                                type="button"
                                className='flex gap-2 px-4 py-2 rounded-md border border-neutral-400 text-neutral-400 items-center hover:border-neutral-700 hover:text-neutral-600 focus:border-black focus:text-black ease-out duration-200'
                                onClick={() => nextStep(0)}
                            >Back</button>
                        )}
                        <button 
                            type="button" 
                            className='flex gap-2 px-4 py-2 rounded-md bg-light-blue items-center hover:bg-blue focus:bg-dark-blue focus:text-white ease-out duration-200'
                            onClick={submitEmail}
                        >Next<HiOutlineArrowLongRight /></button>
                    </span>
                    <span className='w-full grid grid-cols-2 gap-3 mt-auto mb-5'>
                        <p className='col-span-full'>You can also reach out via </p>
                        <a
                            href='tel:+639286935815'                            
                            className='col-span-1 flex gap-2 items-center hover:underline focus:underline ease-out duration-200'
                        ><HiPhone className='text-2xl'/>+63 928 693 5815</a>
                        <a
                            href='tel:+639772473179'                            
                            className='col-span-1 flex gap-2 items-center hover:underline focus:underline ease-out duration-200'
                        ><HiPhone className='text-2xl'/>+63 977 247 3179</a>
                        <a
                            href='https://web.facebook.com/burnboxprinting'
                            className='col-span-1 flex gap-2 items-center hover:underline focus:underline ease-out duration-200'
                        ><FaFacebookSquare className='text-2xl text-blue-700'/>/burnboxprinting</a>
                        <a
                            href="https://burnboxprinting.com/" 
                            target="_blank"
                            className='col-span-1 flex gap-2 items-center hover:underline focus:underline ease-out duration-200'
                        >
                            <HiOutlineGlobeAlt className='text-2xl text-rose-500'/>
                            burnboxprinting.com
                        </a>
                        <a 
                            href="https://www.google.com/maps/place/17+Vatican+City+Dr,+Las+Pi%C3%B1as" 
                            target="_blank"
                            className='col-span-full flex gap-2 items-center hover:underline focus:underline ease-out duration-200'
                        >
                            <HiLocationMarker className='text-2xl text-rose-700'/>
                            17 Vatican City Dr, BF Resort Village, Talon 2, Las Piñas City
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InquireItem