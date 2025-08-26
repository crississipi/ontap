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
  { icon: '🇦🇫', country: 'Afghanistan', code: '+93' },
  { icon: '🇦🇱', country: 'Albania', code: '+355' },
  { icon: '🇩🇿', country: 'Algeria', code: '+213' },
  { icon: '🇦🇩', country: 'Andorra', code: '+376' },
  { icon: '🇦🇴', country: 'Angola', code: '+244' },
  { icon: '🇦🇬', country: 'Antigua and Barbuda', code: '+1-268' },
  { icon: '🇦🇷', country: 'Argentina', code: '+54' },
  { icon: '🇦🇲', country: 'Armenia', code: '+374' },
  { icon: '🇦🇺', country: 'Australia', code: '+61' },
  { icon: '🇦🇹', country: 'Austria', code: '+43' },
  { icon: '🇦🇿', country: 'Azerbaijan', code: '+994' },

  { icon: '🇧🇸', country: 'Bahamas', code: '+1-242' },
  { icon: '🇧🇭', country: 'Bahrain', code: '+973' },
  { icon: '🇧🇩', country: 'Bangladesh', code: '+880' },
  { icon: '🇧🇧', country: 'Barbados', code: '+1-246' },
  { icon: '🇧🇾', country: 'Belarus', code: '+375' },
  { icon: '🇧🇪', country: 'Belgium', code: '+32' },
  { icon: '🇧🇿', country: 'Belize', code: '+501' },
  { icon: '🇧🇯', country: 'Benin', code: '+229' },
  { icon: '🇧🇹', country: 'Bhutan', code: '+975' },
  { icon: '🇧🇴', country: 'Bolivia', code: '+591' },
  { icon: '🇧🇦', country: 'Bosnia and Herzegovina', code: '+387' },
  { icon: '🇧🇼', country: 'Botswana', code: '+267' },
  { icon: '🇧🇷', country: 'Brazil', code: '+55' },
  { icon: '🇧🇳', country: 'Brunei', code: '+673' },
  { icon: '🇧🇬', country: 'Bulgaria', code: '+359' },
  { icon: '🇧🇫', country: 'Burkina Faso', code: '+226' },
  { icon: '🇧🇮', country: 'Burundi', code: '+257' },

  { icon: '🇰🇭', country: 'Cambodia', code: '+855' },
  { icon: '🇨🇲', country: 'Cameroon', code: '+237' },
  { icon: '🇨🇦', country: 'Canada', code: '+1' },
  { icon: '🇨🇻', country: 'Cape Verde', code: '+238' },
  { icon: '🇨🇫', country: 'Central African Republic', code: '+236' },
  { icon: '🇹🇩', country: 'Chad', code: '+235' },
  { icon: '🇨🇱', country: 'Chile', code: '+56' },
  { icon: '🇨🇳', country: 'China', code: '+86' },
  { icon: '🇨🇴', country: 'Colombia', code: '+57' },
  { icon: '🇰🇲', country: 'Comoros', code: '+269' },
  { icon: '🇨🇬', country: 'Congo', code: '+242' },
  { icon: '🇨🇷', country: 'Costa Rica', code: '+506' },
  { icon: '🇭🇷', country: 'Croatia', code: '+385' },
  { icon: '🇨🇺', country: 'Cuba', code: '+53' },
  { icon: '🇨🇾', country: 'Cyprus', code: '+357' },
  { icon: '🇨🇿', country: 'Czechia', code: '+420' },

  { icon: '🇩🇰', country: 'Denmark', code: '+45' },
  { icon: '🇩🇯', country: 'Djibouti', code: '+253' },
  { icon: '🇩🇲', country: 'Dominica', code: '+1-767' },
  { icon: '🇩🇴', country: 'Dominican Republic', code: '+1-809' },

  { icon: '🇪🇨', country: 'Ecuador', code: '+593' },
  { icon: '🇪🇬', country: 'Egypt', code: '+20' },
  { icon: '🇸🇻', country: 'El Salvador', code: '+503' },
  { icon: '🇬🇶', country: 'Equatorial Guinea', code: '+240' },
  { icon: '🇪🇷', country: 'Eritrea', code: '+291' },
  { icon: '🇪🇪', country: 'Estonia', code: '+372' },
  { icon: '🇸🇿', country: 'Eswatini', code: '+268' },
  { icon: '🇪🇹', country: 'Ethiopia', code: '+251' },

  { icon: '🇫🇯', country: 'Fiji', code: '+679' },
  { icon: '🇫🇮', country: 'Finland', code: '+358' },
  { icon: '🇫🇷', country: 'France', code: '+33' },

  { icon: '🇬🇦', country: 'Gabon', code: '+241' },
  { icon: '🇬🇲', country: 'Gambia', code: '+220' },
  { icon: '🇬🇪', country: 'Georgia', code: '+995' },
  { icon: '🇩🇪', country: 'Germany', code: '+49' },
  { icon: '🇬🇭', country: 'Ghana', code: '+233' },
  { icon: '🇬🇷', country: 'Greece', code: '+30' },
  { icon: '🇬🇩', country: 'Grenada', code: '+1-473' },
  { icon: '🇬🇹', country: 'Guatemala', code: '+502' },
  { icon: '🇬🇳', country: 'Guinea', code: '+224' },
  { icon: '🇬🇼', country: 'Guinea-Bissau', code: '+245' },
  { icon: '🇬🇾', country: 'Guyana', code: '+592' },

  { icon: '🇭🇹', country: 'Haiti', code: '+509' },
  { icon: '🇭🇳', country: 'Honduras', code: '+504' },
  { icon: '🇭🇺', country: 'Hungary', code: '+36' },

  { icon: '🇮🇸', country: 'Iceland', code: '+354' },
  { icon: '🇮🇳', country: 'India', code: '+91' },
  { icon: '🇮🇩', country: 'Indonesia', code: '+62' },
  { icon: '🇮🇷', country: 'Iran', code: '+98' },
  { icon: '🇮🇶', country: 'Iraq', code: '+964' },
  { icon: '🇮🇪', country: 'Ireland', code: '+353' },
  { icon: '🇮🇱', country: 'Israel', code: '+972' },
  { icon: '🇮🇹', country: 'Italy', code: '+39' },

  { icon: '🇯🇲', country: 'Jamaica', code: '+1-876' },
  { icon: '🇯🇵', country: 'Japan', code: '+81' },
  { icon: '🇯🇴', country: 'Jordan', code: '+962' },

  { icon: '🇰🇿', country: 'Kazakhstan', code: '+7' },
  { icon: '🇰🇪', country: 'Kenya', code: '+254' },
  { icon: '🇰🇮', country: 'Kiribati', code: '+686' },
  { icon: '🇰🇵', country: 'North Korea', code: '+850' },
  { icon: '🇰🇷', country: 'South Korea', code: '+82' },
  { icon: '🇰🇼', country: 'Kuwait', code: '+965' },
  { icon: '🇰🇬', country: 'Kyrgyzstan', code: '+996' },

  { icon: '🇱🇦', country: 'Laos', code: '+856' },
  { icon: '🇱🇻', country: 'Latvia', code: '+371' },
  { icon: '🇱🇧', country: 'Lebanon', code: '+961' },
  { icon: '🇱🇸', country: 'Lesotho', code: '+266' },
  { icon: '🇱🇷', country: 'Liberia', code: '+231' },
  { icon: '🇱🇾', country: 'Libya', code: '+218' },
  { icon: '🇱🇮', country: 'Liechtenstein', code: '+423' },
  { icon: '🇱🇹', country: 'Lithuania', code: '+370' },
  { icon: '🇱🇺', country: 'Luxembourg', code: '+352' },

  { icon: '🇲🇬', country: 'Madagascar', code: '+261' },
  { icon: '🇲🇼', country: 'Malawi', code: '+265' },
  { icon: '🇲🇾', country: 'Malaysia', code: '+60' },
  { icon: '🇲🇻', country: 'Maldives', code: '+960' },
  { icon: '🇲🇱', country: 'Mali', code: '+223' },
  { icon: '🇲🇹', country: 'Malta', code: '+356' },
  { icon: '🇲🇭', country: 'Marshall Islands', code: '+692' },
  { icon: '🇲🇷', country: 'Mauritania', code: '+222' },
  { icon: '🇲🇺', country: 'Mauritius', code: '+230' },
  { icon: '🇲🇽', country: 'Mexico', code: '+52' },
  { icon: '🇫🇲', country: 'Micronesia', code: '+691' },
  { icon: '🇲🇩', country: 'Moldova', code: '+373' },
  { icon: '🇲🇨', country: 'Monaco', code: '+377' },
  { icon: '🇲🇳', country: 'Mongolia', code: '+976' },
  { icon: '🇲🇪', country: 'Montenegro', code: '+382' },
  { icon: '🇲🇦', country: 'Morocco', code: '+212' },
  { icon: '🇲🇿', country: 'Mozambique', code: '+258' },
  { icon: '🇲🇲', country: 'Myanmar', code: '+95' },

  { icon: '🇳🇦', country: 'Namibia', code: '+264' },
  { icon: '🇳🇷', country: 'Nauru', code: '+674' },
  { icon: '🇳🇵', country: 'Nepal', code: '+977' },
  { icon: '🇳🇱', country: 'Netherlands', code: '+31' },
  { icon: '🇳🇿', country: 'New Zealand', code: '+64' },
  { icon: '🇳🇮', country: 'Nicaragua', code: '+505' },
  { icon: '🇳🇪', country: 'Niger', code: '+227' },
  { icon: '🇳🇬', country: 'Nigeria', code: '+234' },
  { icon: '🇲🇰', country: 'North Macedonia', code: '+389' },
  { icon: '🇳🇴', country: 'Norway', code: '+47' },

  { icon: '🇴🇲', country: 'Oman', code: '+968' },

  { icon: '🇵🇰', country: 'Pakistan', code: '+92' },
  { icon: '🇵🇼', country: 'Palau', code: '+680' },
  { icon: '🇵🇸', country: 'Palestine', code: '+970' },
  { icon: '🇵🇦', country: 'Panama', code: '+507' },
  { icon: '🇵🇬', country: 'Papua New Guinea', code: '+675' },
  { icon: '🇵🇾', country: 'Paraguay', code: '+595' },
  { icon: '🇵🇪', country: 'Peru', code: '+51' },
  { icon: '🇵🇭', country: 'Philippines', code: '+63' },
  { icon: '🇵🇱', country: 'Poland', code: '+48' },
  { icon: '🇵🇹', country: 'Portugal', code: '+351' },

  { icon: '🇶🇦', country: 'Qatar', code: '+974' },

  { icon: '🇷🇴', country: 'Romania', code: '+40' },
  { icon: '🇷🇺', country: 'Russia', code: '+7' },
  { icon: '🇷🇼', country: 'Rwanda', code: '+250' },

  { icon: '🇰🇳', country: 'Saint Kitts and Nevis', code: '+1-869' },
  { icon: '🇱🇨', country: 'Saint Lucia', code: '+1-758' },
  { icon: '🇻🇨', country: 'Saint Vincent and the Grenadines', code: '+1-784' },
  { icon: '🇼🇸', country: 'Samoa', code: '+685' },
  { icon: '🇸🇲', country: 'San Marino', code: '+378' },
  { icon: '🇸🇹', country: 'São Tomé and Príncipe', code: '+239' },
  { icon: '🇸🇦', country: 'Saudi Arabia', code: '+966' },
  { icon: '🇸🇳', country: 'Senegal', code: '+221' },
  { icon: '🇷🇸', country: 'Serbia', code: '+381' },
  { icon: '🇸🇨', country: 'Seychelles', code: '+248' },
  { icon: '🇸🇱', country: 'Sierra Leone', code: '+232' },
  { icon: '🇸🇬', country: 'Singapore', code: '+65' },
  { icon: '🇸🇰', country: 'Slovakia', code: '+421' },
  { icon: '🇸🇮', country: 'Slovenia', code: '+386' },
  { icon: '🇸🇧', country: 'Solomon Islands', code: '+677' },
  { icon: '🇸🇴', country: 'Somalia', code: '+252' },
  { icon: '🇿🇦', country: 'South Africa', code: '+27' },
  { icon: '🇪🇸', country: 'Spain', code: '+34' },
  { icon: '🇱🇰', country: 'Sri Lanka', code: '+94' },
  { icon: '🇸🇩', country: 'Sudan', code: '+249' },
  { icon: '🇸🇷', country: 'Suriname', code: '+597' },
  { icon: '🇸🇪', country: 'Sweden', code: '+46' },
  { icon: '🇨🇭', country: 'Switzerland', code: '+41' },
  { icon: '🇸🇾', country: 'Syria', code: '+963' },

  { icon: '🇹🇼', country: 'Taiwan', code: '+886' },
  { icon: '🇹🇯', country: 'Tajikistan', code: '+992' },
  { icon: '🇹🇿', country: 'Tanzania', code: '+255' },
  { icon: '🇹🇭', country: 'Thailand', code: '+66' },
  { icon: '🇹🇱', country: 'Timor-Leste', code: '+670' },
  { icon: '🇹🇬', country: 'Togo', code: '+228' },
  { icon: '🇹🇴', country: 'Tonga', code: '+676' },
  { icon: '🇹🇹', country: 'Trinidad and Tobago', code: '+1-868' },
  { icon: '🇹🇳', country: 'Tunisia', code: '+216' },
  { icon: '🇹🇷', country: 'Turkey', code: '+90' },
  { icon: '🇹🇲', country: 'Turkmenistan', code: '+993' },
  { icon: '🇹🇻', country: 'Tuvalu', code: '+688' },

  { icon: '🇺🇦', country: 'Ukraine', code: '+380' },
  { icon: '🇦🇪', country: 'United Arab Emirates', code: '+971' },
  { icon: '🇬🇧', country: 'United Kingdom', code: '+44' },
  { icon: '🇺🇸', country: 'United States', code: '+1' },
  { icon: '🇺🇾', country: 'Uruguay', code: '+598' },
  { icon: '🇺🇿', country: 'Uzbekistan', code: '+998' },
  { icon: '🇻🇺', country: 'Vanuatu', code: '+678' },
  { icon: '🇻🇦', country: 'Vatican City', code: '+39' },
  { icon: '🇻🇪', country: 'Venezuela', code: '+58' },
  { icon: '🇻🇳', country: 'Vietnam', code: '+84' },
  { icon: '🇾🇪', country: 'Yemen', code: '+967' },
  { icon: '🇿🇲', country: 'Zambia', code: '+260' },
  { icon: '🇿🇼', country: 'Zimbabwe', code: '+263' },
]

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