"use client"

import React, { useRef, useState } from 'react'
import ProductCard from './ProductCard'
import { ProductCardProps, ProductProps } from '@/types';
import { HiOutlineArrowLongRight, HiOutlineGlobeAlt, HiOutlineXMark, HiPhone } from 'react-icons/hi2';
import Image from 'next/image';
import { FaFacebookSquare } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

type ProdCard = ProductCardProps & ProductProps;

const countries = [
    { icon: '🇦🇫', country: 'Afghanistan' },
    { icon: '🇦🇱', country: 'Albania' },
    { icon: '🇩🇿', country: 'Algeria' },
    { icon: '🇦🇸', country: 'American Samoa' },
    { icon: '🇦🇩', country: 'Andorra' },
    { icon: '🇦🇴', country: 'Angola' },
    { icon: '🇦🇮', country: 'Anguilla' },
    { icon: '🇦🇶', country: 'Antarctica' },
    { icon: '🇦🇬', country: 'Antigua and Barbuda' },
    { icon: '🇦🇷', country: 'Argentina' },
    { icon: '🇦🇲', country: 'Armenia' },
    { icon: '🇦🇼', country: 'Aruba' },
    { icon: '🇦🇺', country: 'Australia' },
    { icon: '🇦🇹', country: 'Austria' },
    { icon: '🇦🇿', country: 'Azerbaijan' },

    { icon: '🇧🇸', country: 'Bahamas' },
    { icon: '🇧🇭', country: 'Bahrain' },
    { icon: '🇧🇩', country: 'Bangladesh' },
    { icon: '🇧🇧', country: 'Barbados' },
    { icon: '🇧🇾', country: 'Belarus' },
    { icon: '🇧🇪', country: 'Belgium' },
    { icon: '🇧🇿', country: 'Belize' },
    { icon: '🇧🇯', country: 'Benin' },
    { icon: '🇧🇲', country: 'Bermuda' },
    { icon: '🇧🇹', country: 'Bhutan' },
    { icon: '🇧🇴', country: 'Bolivia' },
    { icon: '🇧🇦', country: 'Bosnia and Herzegovina' },
    { icon: '🇧🇼', country: 'Botswana' },
    { icon: '🇧🇷', country: 'Brazil' },
    { icon: '🇮🇴', country: 'British Indian Ocean Territory' },
    { icon: '🇻🇬', country: 'British Virgin Islands' },
    { icon: '🇧🇳', country: 'Brunei' },
    { icon: '🇧🇬', country: 'Bulgaria' },
    { icon: '🇧🇫', country: 'Burkina Faso' },
    { icon: '🇧🇮', country: 'Burundi' },

    { icon: '🇰🇭', country: 'Cambodia' },
    { icon: '🇨🇲', country: 'Cameroon' },
    { icon: '🇨🇦', country: 'Canada' },
    { icon: '🇨🇻', country: 'Cape Verde' },
    { icon: '🇰🇾', country: 'Cayman Islands' },
    { icon: '🇨🇫', country: 'Central African Republic' },
    { icon: '🇹🇩', country: 'Chad' },
    { icon: '🇨🇱', country: 'Chile' },
    { icon: '🇨🇳', country: 'China' },
    { icon: '🇨🇽', country: 'Christmas Island' },
    { icon: '🇨🇨', country: 'Cocos (Keeling) Islands' },
    { icon: '🇨🇴', country: 'Colombia' },
    { icon: '🇰🇲', country: 'Comoros' },
    { icon: '🇨🇬', country: 'Congo' },
    { icon: '🇨🇩', country: 'Congo (Democratic Republic)' },
    { icon: '🇨🇰', country: 'Cook Islands' },
    { icon: '🇨🇷', country: 'Costa Rica' },
    { icon: '🇭🇷', country: 'Croatia' },
    { icon: '🇨🇺', country: 'Cuba' },
    { icon: '🇨🇼', country: 'Curaçao' },
    { icon: '🇨🇾', country: 'Cyprus' },
    { icon: '🇨🇿', country: 'Czechia' },

     { icon: '🇩🇰', country: 'Denmark' },
    { icon: '🇩🇯', country: 'Djibouti' },
    { icon: '🇩🇲', country: 'Dominica' },
    { icon: '🇩🇴', country: 'Dominican Republic' },

    { icon: '🇪🇨', country: 'Ecuador' },
    { icon: '🇪🇬', country: 'Egypt' },
    { icon: '🇸🇻', country: 'El Salvador' },
    { icon: '🇬🇶', country: 'Equatorial Guinea' },
    { icon: '🇪🇷', country: 'Eritrea' },
    { icon: '🇪🇪', country: 'Estonia' },
    { icon: '🇸🇿', country: 'Eswatini' },
    { icon: '🇪🇹', country: 'Ethiopia' },

    { icon: '🇫🇰', country: 'Falkland Islands' },
    { icon: '🇫🇴', country: 'Faroe Islands' },
    { icon: '🇫🇯', country: 'Fiji' },
    { icon: '🇫🇮', country: 'Finland' },
    { icon: '🇫🇷', country: 'France' },
    { icon: '🇬🇫', country: 'French Guiana' },
    { icon: '🇵🇫', country: 'French Polynesia' },
    { icon: '🇹🇫', country: 'French Southern Territories' },

    { icon: '🇬🇦', country: 'Gabon' },
    { icon: '🇬🇲', country: 'Gambia' },
    { icon: '🇬🇪', country: 'Georgia' },
    { icon: '🇩🇪', country: 'Germany' },
    { icon: '🇬🇭', country: 'Ghana' },
    { icon: '🇬🇮', country: 'Gibraltar' },
    { icon: '🇬🇷', country: 'Greece' },
    { icon: '🇬🇱', country: 'Greenland' },
    { icon: '🇬🇩', country: 'Grenada' },
    { icon: '🇬🇵', country: 'Guadeloupe' },
    { icon: '🇬🇺', country: 'Guam' },
    { icon: '🇬🇹', country: 'Guatemala' },
    { icon: '🇬🇬', country: 'Guernsey' },
    { icon: '🇬🇳', country: 'Guinea' },
    { icon: '🇬🇼', country: 'Guinea-Bissau' },
    { icon: '🇬🇾', country: 'Guyana' },

    { icon: '🇭🇹', country: 'Haiti' },
    { icon: '🇭🇳', country: 'Honduras' },
    { icon: '🇭🇰', country: 'Hong Kong' },
    { icon: '🇭🇺', country: 'Hungary' },

    { icon: '🇮🇸', country: 'Iceland' },
    { icon: '🇮🇳', country: 'India' },
    { icon: '🇮🇩', country: 'Indonesia' },
    { icon: '🇮🇷', country: 'Iran' },
    { icon: '🇮🇶', country: 'Iraq' },
    { icon: '🇮🇪', country: 'Ireland' },
    { icon: '🇮🇲', country: 'Isle of Man' },
    { icon: '🇮🇱', country: 'Israel' },
    { icon: '🇮🇹', country: 'Italy' },

    { icon: '🇯🇲', country: 'Jamaica' },
    { icon: '🇯🇵', country: 'Japan' },
    { icon: '🇯🇪', country: 'Jersey' },
    { icon: '🇯🇴', country: 'Jordan' },

    { icon: '🇰🇿', country: 'Kazakhstan' },
    { icon: '🇰🇪', country: 'Kenya' },
    { icon: '🇰🇮', country: 'Kiribati' },
    { icon: '🇽🇰', country: 'Kosovo' },
    { icon: '🇰🇼', country: 'Kuwait' },
    { icon: '🇰🇬', country: 'Kyrgyzstan' },

    { icon: '🇱🇦', country: 'Laos' },
    { icon: '🇱🇻', country: 'Latvia' },
    { icon: '🇱🇧', country: 'Lebanon' },
    { icon: '🇱🇸', country: 'Lesotho' },
    { icon: '🇱🇷', country: 'Liberia' },
    { icon: '🇱🇾', country: 'Libya' },
    { icon: '🇱🇮', country: 'Liechtenstein' },
    { icon: '🇱🇹', country: 'Lithuania' },
    { icon: '🇱🇺', country: 'Luxembourg' },

    { icon: '🇲🇴', country: 'Macao' },
    { icon: '🇲🇰', country: 'North Macedonia' },
    { icon: '🇲🇬', country: 'Madagascar' },
    { icon: '🇲🇼', country: 'Malawi' },
    { icon: '🇲🇾', country: 'Malaysia' },
    { icon: '🇲🇻', country: 'Maldives' },
    { icon: '🇲🇱', country: 'Mali' },
    { icon: '🇲🇹', country: 'Malta' },
    { icon: '🇲🇭', country: 'Marshall Islands' },
    { icon: '🇲🇶', country: 'Martinique' },
    { icon: '🇲🇷', country: 'Mauritania' },
    { icon: '🇲🇺', country: 'Mauritius' },
    { icon: '🇾🇹', country: 'Mayotte' },
    { icon: '🇲🇽', country: 'Mexico' },
    { icon: '🇫🇲', country: 'Micronesia' },
    { icon: '🇲🇩', country: 'Moldova' },
    { icon: '🇲🇨', country: 'Monaco' },
    { icon: '🇲🇳', country: 'Mongolia' },
    { icon: '🇲🇪', country: 'Montenegro' },
    { icon: '🇲🇸', country: 'Montserrat' },
    { icon: '🇲🇦', country: 'Morocco' },
    { icon: '🇲🇿', country: 'Mozambique' },
    { icon: '🇲🇲', country: 'Myanmar' },

    { icon: '🇳🇦', country: 'Namibia' },
    { icon: '🇳🇷', country: 'Nauru' },
    { icon: '🇳🇵', country: 'Nepal' },
    { icon: '🇳🇱', country: 'Netherlands' },
    { icon: '🇳🇨', country: 'New Caledonia' },
    { icon: '🇳🇿', country: 'New Zealand' },
    { icon: '🇳🇮', country: 'Nicaragua' },
    { icon: '🇳🇪', country: 'Niger' },
    { icon: '🇳🇬', country: 'Nigeria' },
    { icon: '🇳🇺', country: 'Niue' },
    { icon: '🇳🇫', country: 'Norfolk Island' },
    { icon: '🇰🇵', country: 'North Korea' },
    { icon: '🇲🇵', country: 'Northern Mariana Islands' },
    { icon: '🇳🇴', country: 'Norway' },

    { icon: '🇴🇲', country: 'Oman' },

    { icon: '🇵🇰', country: 'Pakistan' },
    { icon: '🇵🇼', country: 'Palau' },
    { icon: '🇵🇸', country: 'Palestine' },
    { icon: '🇵🇦', country: 'Panama' },
    { icon: '🇵🇬', country: 'Papua New Guinea' },
    { icon: '🇵🇾', country: 'Paraguay' },
    { icon: '🇵🇪', country: 'Peru' },
    { icon: '🇵🇭', country: 'Philippines' },
    { icon: '🇵🇳', country: 'Pitcairn Islands' },
    { icon: '🇵🇱', country: 'Poland' },
    { icon: '🇵🇹', country: 'Portugal' },
    { icon: '🇵🇷', country: 'Puerto Rico' },

    { icon: '🇶🇦', country: 'Qatar' },

     { icon: '🇷🇪', country: 'Réunion' },
    { icon: '🇷🇴', country: 'Romania' },
    { icon: '🇷🇺', country: 'Russia' },
    { icon: '🇷🇼', country: 'Rwanda' },

    { icon: '🇼🇸', country: 'Samoa' },
    { icon: '🇸🇲', country: 'San Marino' },
    { icon: '🇸🇦', country: 'Saudi Arabia' },
    { icon: '🇸🇳', country: 'Senegal' },
    { icon: '🇷🇸', country: 'Serbia' },
    { icon: '🇸🇨', country: 'Seychelles' },
    { icon: '🇸🇱', country: 'Sierra Leone' },
    { icon: '🇸🇬', country: 'Singapore' },
    { icon: '🇸🇽', country: 'Sint Maarten' },
    { icon: '🇸🇰', country: 'Slovakia' },
    { icon: '🇸🇮', country: 'Slovenia' },
    { icon: '🇸🇧', country: 'Solomon Islands' },
    { icon: '🇸🇴', country: 'Somalia' },
    { icon: '🇿🇦', country: 'South Africa' },
    { icon: '🇰🇷', country: 'South Korea' },
    { icon: '🇸🇸', country: 'South Sudan' },
    { icon: '🇪🇸', country: 'Spain' },
    { icon: '🇱🇰', country: 'Sri Lanka' },
    { icon: '🇧🇱', country: 'St. Barthélemy' },
    { icon: '🇸🇭', country: 'St. Helena' },
    { icon: '🇰🇳', country: 'St. Kitts and Nevis' },
    { icon: '🇱🇨', country: 'St. Lucia' },
    { icon: '🇲🇫', country: 'St. Martin' },
    { icon: '🇵🇲', country: 'St. Pierre and Miquelon' },
    { icon: '🇻🇨', country: 'St. Vincent and Grenadines' },
    { icon: '🇸🇩', country: 'Sudan' },
    { icon: '🇸🇷', country: 'Suriname' },
    { icon: '🇸🇿', country: 'Swaziland' },
    { icon: '🇸🇪', country: 'Sweden' },
    { icon: '🇨🇭', country: 'Switzerland' },
    { icon: '🇸🇾', country: 'Syria' },

    { icon: '🇹🇼', country: 'Taiwan' },
    { icon: '🇹🇯', country: 'Tajikistan' },
    { icon: '🇹🇿', country: 'Tanzania' },
    { icon: '🇹🇭', country: 'Thailand' },
    { icon: '🇹🇱', country: 'Timor-Leste' },
    { icon: '🇹🇬', country: 'Togo' },
    { icon: '🇹🇰', country: 'Tokelau' },
    { icon: '🇹🇴', country: 'Tonga' },
    { icon: '🇹🇹', country: 'Trinidad and Tobago' },
    { icon: '🇹🇳', country: 'Tunisia' },
    { icon: '🇹🇷', country: 'Turkey' },
    { icon: '🇹🇲', country: 'Turkmenistan' },
    { icon: '🇹🇨', country: 'Turks and Caicos Islands' },
    { icon: '🇹🇻', country: 'Tuvalu' },

    { icon: '🇺🇬', country: 'Uganda' },
    { icon: '🇺🇦', country: 'Ukraine' },
    { icon: '🇦🇪', country: 'United Arab Emirates' },
    { icon: '🇬🇧', country: 'United Kingdom' },
    { icon: '🇺🇸', country: 'United States' },
    { icon: '🇺🇾', country: 'Uruguay' },
    { icon: '🇺🇿', country: 'Uzbekistan' },

    { icon: '🇻🇺', country: 'Vanuatu' },
    { icon: '🇻🇦', country: 'Vatican City' },
    { icon: '🇻🇪', country: 'Venezuela' },
    { icon: '🇻🇳', country: 'Vietnam' },
    { icon: '🇼🇫', country: 'Wallis and Futuna' },
    { icon: '🇪🇭', country: 'Western Sahara' },

    { icon: '🇾🇪', country: 'Yemen' },

    { icon: '🇿🇲', country: 'Zambia' },
    { icon: '🇿🇼', country: 'Zimbabwe' }
];

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
                    const [otp, setOtp] = useState<string>("".padEnd(6, " ")); // OTP as string
                    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
                    
                    const getInputs = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const { name, value } = e.target;
                        storeUserInfo((prev) => ({
                            ...prev,
                            [name]: value,
    }));
  }

    const submitEmail = async () => {
    if (step === 0) {
        if (!userInfo.name || !userInfo.contact || !userInfo.email) {
            alert('Please fill out all required fields.');
        } else {
            try {
                const res = await fetch('/api/email-verification', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        email: userInfo.email,
                        name: userInfo.name,
                    }),
                });

                const data = await res.json();

                if (data.success) {
                    alert('OTP sent successfully!');
                    nextStep(1);
                } else {
                    alert('Failed to send OTP: ' + data.message)
                }
            } catch (err) {
                console.log('Error sending OTP: ' + err);
            }
        }
    } else if (step === 1) {
        try {
            const res = await fetch('/api/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: userInfo.email,
                    otp: otp,
                }),
            });

            const data = await res.json();

            if (data.success) {
                alert('OTP Matched.');
                nextStep(2);
                setEmailContent(
                <>
                    Hello <strong>OnTap Sales/Marketing Team</strong>,
                    <br />
                    <br />
                    I hope this message finds you well. I am reaching out to inquire about the availability and details of your{' '}
                    <strong>{productName}</strong> product. Could you kindly provide me with information regarding:
                    <br />
                    <br />
                    <ul className="list-disc list-inside space-y-2 pl-3">
                    <li>Pricing for different quantities</li>
                    <li>Available sizes and material options</li>
                    <li>Estimated production and delivery time</li>
                    </ul>
                    <br />
                    If there are any design guidelines or minimum order requirements, I would also appreciate it if you could share those details.
                    <br />
                    <br />
                    Thank you in advance for your assistance. I look forward to your reply.
                    <br />
                    <br />
                    Best regards,
                    <br />
                    <strong className="capitalize">{userInfo.name}</strong>
                    <br />
                    <strong>{userInfo.contact}</strong>
                    <br />
                    <strong className="lowercase">{userInfo.email}</strong>
                </>
                );
            } else { alert('OTP not matched.')}
        } catch (err) { console.log(err) };
    } else {
        const messageHtml = emailRef.current?.innerHTML || '';

        const payload = {
            email: userInfo.email,
            name: userInfo.name,
            subject: userInfo.subject,
            message: messageHtml,
            time: new Date().toLocaleString()
        };

        try {
        const res = await fetch('/api/product-inquiry-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (data.success) {
            alert('Message sent successfully!');
            nextStep(0);
            storeUserInfo({
            name: '',
            contact: '',
            email: '',
            subject: `Product Inquiry: ${productName}`,
            });
            setOtp('');
        } else {
            alert(`Error: ${data.message}`);
        }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('An unexpected error occurred.');
        }
    }
    };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let value = e.target.value;

    // only keep one digit
    if (value.length > 1) {
      value = value.charAt(0);
    }

    // update OTP string
    const otpArray = otp.split("");
    otpArray[index] = value;
    const newOtp = otpArray.join("");
    setOtp(newOtp);

    // move focus to next input automatically
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // clear this and all next inputs
  const handleClick = (index: number) => {
    const otpArray = otp.split("");
    for (let i = index; i < otpArray.length; i++) {
      otpArray[i] = " ";
    }
    setOtp(otpArray.join(""));
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
                        <p className='font-semibold'>{step === 0 ? 'Leave Us a Message' : 'Account Verification'}</p>
                    </span>
                    <button 
                        type="button"
                        className='text-3xl text-neutral-400 rounded-full hover:bg-light-blue hover:text-rose-300 focus:bg-blue focus:text-rose-500 ease-out duration-200'
                        onClick={() => setInquireItem(false)}
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
                                    className='h-full w-full outline-none capitalize'
                                />
                            </span>
                            <span className='px-5 py-3 rounded-md border border-neutral-200 flex gap-2 relative'>
                                <div>
                                    <input type="text" name="" id="" />
                                    <button type="button"></button>
                                </div>
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
                                    className='h-full w-full outline-none lowercase placeholder:capitalize'
                                />
                            </span>
                        </>
                    )}
                    { step === 1 && (
                        <>
                            <p>We sent a One-Time Code to your email  <strong>{userInfo.email}</strong>. Please check and input the OTP Key below.</p>
                            <span className='mt-auto grid grid-cols-6 gap-3 px-14'>
                                {[...Array(6)].map((_, index) => (
                                    <input
                                    key={index}
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    maxLength={1}
                                    value={otp[index] === " " ? "" : otp[index] ?? ""}
                                    className="p-3 border border-gray-400 rounded-md text-center text-3xl text-dark-blue font-bold focus:outline-blue ease-out duration-200"
                                    ref={(el) => {
                                        inputRefs.current[index] = el;
                                    }}
                                    onChange={(e) => handleInput(e, index)}
                                    onClick={() => handleClick(index)}
                                    />
                                ))}
                            </span>
                        </>
                    )}
                    { step === 2 && (
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
                        { step > 0 && (
                            <button 
                                type="button"
                                className='flex gap-2 px-4 py-2 rounded-md border border-neutral-400 text-neutral-400 items-center hover:border-neutral-700 hover:text-neutral-600 focus:border-black focus:text-black ease-out duration-200'
                                onClick={() => { step === 2 ? nextStep(1) : nextStep(0)}}
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