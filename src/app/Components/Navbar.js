'use client'
import React, { useState } from 'react'
import { ToggleSwitch } from 'flowbite-react';

const Navbar = ({ handleToggleModal }) => {
    const [dark, setDark] = useState(true);
    const [darkToggle, setDarkToggle] = useState(false);
    const [switch1, setSwitch1] = useState(false);

    const toggleTheme = () => {
        setDark(!dark);
        if (dark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };

    const [isToggled, setIsToggled] = useState(false);

    const toggleSwitch = () => {
        setIsToggled(!isToggled);
    };




    return (
        <>
            {/* desk nav */}
            <div className='lg:flex hidden items-center w-full justify-between py-4 res-body-padding lg:px-40 bg-[#191B20] text-[#C5C6C7]'>
                <div>
                    <img className='max-w-[103px]' src='/Images/mainlogo.png'></img>
                </div>

                <div className='flex gap-4 space font-normal text-base'>
                    <div className='flex items-center gap-2'>
                        <p>Coins</p>
                        <div className='mt-1'>
                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.32166 4.26331L6.44229 0.118H0.201025L3.32166 4.26331Z" fill="#D9D9D9" />
                            </svg>
                        </div>
                    </div>

                    <p>/</p>
                    <p>News</p>
                    <p>/</p>
                    <p>Education</p>
                    <p>/</p>
                    <div className='flex items-center gap-2'>
                        <p>Recomended</p>
                        <div className='mt-1'>
                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.32166 4.26331L6.44229 0.118H0.201025L3.32166 4.26331Z" fill="#D9D9D9" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='flex gap-6 items-center'>
                    <div>
                        <div className="flex items-center cursor-pointer" onClick={toggleTheme}>
                            <div className={`w-[60px] h-[30px]  relative  flex items-center bg-[#111111] rounded-full  ${dark ? '' : ''}`}>
                                <div className='absolute left-2'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.01703 15.4492C12.0582 15.4492 15.3344 12.1731 15.3344 8.1319C15.3344 7.79332 14.8269 7.73735 14.6518 8.02711C13.8189 9.40555 12.3061 10.3271 10.5781 10.3271C7.95125 10.3271 5.82183 8.19768 5.82183 5.57083C5.82183 3.84281 6.74338 2.33003 8.12181 1.49711C8.41158 1.32201 8.3556 0.814575 8.01703 0.814575C3.97578 0.814575 0.699707 4.09065 0.699707 8.1319C0.699707 12.1731 3.97578 15.4492 8.01703 15.4492Z" fill="#F39C12" />
                                    </svg>
                                </div>
                                <div className='absolute right-2'>
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1341 0.401226C9.93902 0.0830551 9.47673 0.0830549 9.28163 0.401225L7.57735 3.18056C7.55997 3.2089 7.55077 3.2415 7.55077 3.27475C7.55077 3.43528 7.35668 3.51568 7.24316 3.40217L7.00345 3.16245C6.95687 3.11587 6.89708 3.08477 6.8322 3.07338L3.93365 2.5643C3.59212 2.50432 3.29471 2.80172 3.35469 3.14326L3.86921 6.07279C3.87706 6.1175 3.8985 6.15871 3.9306 6.19082C4.06981 6.33002 3.97122 6.56805 3.77435 6.56805H3.6512C3.59515 6.56805 3.54047 6.58536 3.49463 6.61763L1.0818 8.31631C0.798907 8.51547 0.798906 8.93483 1.0818 9.13399L3.47 10.8153C3.53186 10.8589 3.60567 10.8823 3.68133 10.8823H3.94875C4.17712 10.8823 4.2915 11.1584 4.13001 11.3199C4.09795 11.3519 4.07496 11.3919 4.0634 11.4358L3.2074 14.6821C3.10971 15.0526 3.44789 15.3908 3.81836 15.2931L7.07399 14.4346C7.11176 14.4247 7.14621 14.4049 7.17383 14.3773C7.31293 14.2382 7.55077 14.3367 7.55077 14.5334V14.8972C7.55077 14.9721 7.57339 15.0452 7.61566 15.107L9.29521 17.5619C9.49377 17.8521 9.92197 17.8521 10.1205 17.5619L11.8081 15.0953C11.8451 15.0411 11.865 14.977 11.865 14.9114V14.5707C11.865 14.4063 12.0637 14.324 12.18 14.4402C12.2041 14.4643 12.2343 14.4812 12.2674 14.4892L15.4366 15.2491C15.7996 15.3361 16.1265 15.0092 16.0394 14.6463L15.2862 11.5047C15.2739 11.4535 15.2477 11.4067 15.2105 11.3695L15.1221 11.2811C14.9749 11.1339 15.0792 10.8823 15.2873 10.8823C15.3305 10.8823 15.3727 10.8703 15.4095 10.8478L18.176 9.15139C18.4941 8.95629 18.4941 8.49401 18.176 8.29891L15.3863 6.5883C15.3647 6.57506 15.3399 6.56805 15.3145 6.56805C15.1922 6.56805 15.1309 6.42014 15.2174 6.33364L15.4165 6.13456C15.4496 6.10143 15.473 6.05978 15.4839 6.01421L16.2392 2.86406C16.3262 2.50112 15.9994 2.17423 15.6364 2.26125L12.496 3.01425C12.4441 3.0267 12.3966 3.05327 12.3589 3.09102L12.0935 3.35635C12.0092 3.44069 11.865 3.38096 11.865 3.26168C11.865 3.23698 11.8581 3.21276 11.8452 3.1917L10.1341 0.401226ZM14.5505 9.25024C14.5505 11.9247 12.3825 14.0927 9.70805 14.0927C7.03363 14.0927 4.86559 11.9247 4.86559 9.25024C4.86559 6.57581 7.03363 4.40777 9.70805 4.40777C12.3825 4.40777 14.5505 6.57581 14.5505 9.25024ZM9.70793 12.9725C11.7637 12.9725 13.4302 11.306 13.4302 9.25024C13.4302 7.19451 11.7637 5.52801 9.70793 5.52801C7.6522 5.52801 5.9857 7.19451 5.9857 9.25024C5.9857 11.306 7.6522 12.9725 9.70793 12.9725Z" fill="#F39C12" />
                                    </svg>
                                </div>
                                <div className={`bg-white w-[30px] h-[30px] rounded-full shadow-md transform duration-300 ease-in-out ${dark ? 'translate-x-full' : ''}`}></div>
                            </div>
                        </div>
                    </div>

                    <div className=' w-[39px] h-[39px] border-[#44464B] bg-[#23252A] rounded-[6px] flex justify-center items-center'>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_39_1249)">
                                <mask id="mask0_39_1249" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="21">
                                    <path d="M20.4385 0.634277H0.438477V20.6343H20.4385V0.634277Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_39_1249)">
                                    <path d="M16.2308 15.3659C15.9379 15.073 15.4631 15.073 15.1702 15.3659C14.8773 15.6588 14.8773 16.1337 15.1702 16.4266L16.2308 15.3659ZM18.4082 19.6646C18.7011 19.9575 19.1759 19.9575 19.4688 19.6646C19.7617 19.3717 19.7617 18.8969 19.4688 18.604L18.4082 19.6646ZM15.1702 16.4266L18.4082 19.6646L19.4688 18.604L16.2308 15.3659L15.1702 16.4266ZM9.22421 15.9557C5.61462 15.9557 2.68848 13.0296 2.68848 9.41998H1.18848C1.18848 13.858 4.7862 17.4557 9.22421 17.4557V15.9557ZM15.76 9.41998C15.76 13.0296 12.8338 15.9557 9.22421 15.9557V17.4557C13.6622 17.4557 17.26 13.858 17.26 9.41998H15.76ZM9.22421 2.88428C12.8338 2.88428 15.76 5.81042 15.76 9.41998H17.26C17.26 4.98198 13.6622 1.38428 9.22421 1.38428V2.88428ZM9.22421 1.38428C4.7862 1.38428 1.18848 4.98198 1.18848 9.41998H2.68848C2.68848 5.81042 5.61462 2.88428 9.22421 2.88428V1.38428Z" fill="white" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_39_1249">
                                    <rect width="20" height="20" fill="white" transform="translate(0.438477 0.634277)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>

                </div>
            </div>

            {/* mob nav */}
            <div className='relative bg-[#191B20] lg:hidden flex w-full justify-between px-4 py-7'>
                <div className=''>
                    <div className=''>
                        <img className='max-w-[103px]' src='/Images/mainlogo.png'></img>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div>
                        <div className="flex items-center cursor-pointer" onClick={toggleTheme}>
                            <div className={`w-[60px] h-[30px]  relative  flex items-center bg-[#111111] rounded-full  ${dark ? '' : ''}`}>
                                <div className='absolute left-2'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.01703 15.4492C12.0582 15.4492 15.3344 12.1731 15.3344 8.1319C15.3344 7.79332 14.8269 7.73735 14.6518 8.02711C13.8189 9.40555 12.3061 10.3271 10.5781 10.3271C7.95125 10.3271 5.82183 8.19768 5.82183 5.57083C5.82183 3.84281 6.74338 2.33003 8.12181 1.49711C8.41158 1.32201 8.3556 0.814575 8.01703 0.814575C3.97578 0.814575 0.699707 4.09065 0.699707 8.1319C0.699707 12.1731 3.97578 15.4492 8.01703 15.4492Z" fill="#F39C12" />
                                    </svg>
                                </div>
                                <div className='absolute right-2'>
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1341 0.401226C9.93902 0.0830551 9.47673 0.0830549 9.28163 0.401225L7.57735 3.18056C7.55997 3.2089 7.55077 3.2415 7.55077 3.27475C7.55077 3.43528 7.35668 3.51568 7.24316 3.40217L7.00345 3.16245C6.95687 3.11587 6.89708 3.08477 6.8322 3.07338L3.93365 2.5643C3.59212 2.50432 3.29471 2.80172 3.35469 3.14326L3.86921 6.07279C3.87706 6.1175 3.8985 6.15871 3.9306 6.19082C4.06981 6.33002 3.97122 6.56805 3.77435 6.56805H3.6512C3.59515 6.56805 3.54047 6.58536 3.49463 6.61763L1.0818 8.31631C0.798907 8.51547 0.798906 8.93483 1.0818 9.13399L3.47 10.8153C3.53186 10.8589 3.60567 10.8823 3.68133 10.8823H3.94875C4.17712 10.8823 4.2915 11.1584 4.13001 11.3199C4.09795 11.3519 4.07496 11.3919 4.0634 11.4358L3.2074 14.6821C3.10971 15.0526 3.44789 15.3908 3.81836 15.2931L7.07399 14.4346C7.11176 14.4247 7.14621 14.4049 7.17383 14.3773C7.31293 14.2382 7.55077 14.3367 7.55077 14.5334V14.8972C7.55077 14.9721 7.57339 15.0452 7.61566 15.107L9.29521 17.5619C9.49377 17.8521 9.92197 17.8521 10.1205 17.5619L11.8081 15.0953C11.8451 15.0411 11.865 14.977 11.865 14.9114V14.5707C11.865 14.4063 12.0637 14.324 12.18 14.4402C12.2041 14.4643 12.2343 14.4812 12.2674 14.4892L15.4366 15.2491C15.7996 15.3361 16.1265 15.0092 16.0394 14.6463L15.2862 11.5047C15.2739 11.4535 15.2477 11.4067 15.2105 11.3695L15.1221 11.2811C14.9749 11.1339 15.0792 10.8823 15.2873 10.8823C15.3305 10.8823 15.3727 10.8703 15.4095 10.8478L18.176 9.15139C18.4941 8.95629 18.4941 8.49401 18.176 8.29891L15.3863 6.5883C15.3647 6.57506 15.3399 6.56805 15.3145 6.56805C15.1922 6.56805 15.1309 6.42014 15.2174 6.33364L15.4165 6.13456C15.4496 6.10143 15.473 6.05978 15.4839 6.01421L16.2392 2.86406C16.3262 2.50112 15.9994 2.17423 15.6364 2.26125L12.496 3.01425C12.4441 3.0267 12.3966 3.05327 12.3589 3.09102L12.0935 3.35635C12.0092 3.44069 11.865 3.38096 11.865 3.26168C11.865 3.23698 11.8581 3.21276 11.8452 3.1917L10.1341 0.401226ZM14.5505 9.25024C14.5505 11.9247 12.3825 14.0927 9.70805 14.0927C7.03363 14.0927 4.86559 11.9247 4.86559 9.25024C4.86559 6.57581 7.03363 4.40777 9.70805 4.40777C12.3825 4.40777 14.5505 6.57581 14.5505 9.25024ZM9.70793 12.9725C11.7637 12.9725 13.4302 11.306 13.4302 9.25024C13.4302 7.19451 11.7637 5.52801 9.70793 5.52801C7.6522 5.52801 5.9857 7.19451 5.9857 9.25024C5.9857 11.306 7.6522 12.9725 9.70793 12.9725Z" fill="#F39C12" />
                                    </svg>
                                </div>
                                <div className={`bg-white w-[30px] h-[30px] rounded-full shadow-md transform duration-300 ease-in-out ${dark ? 'translate-x-full' : ''}`}></div>
                            </div>
                        </div>
                    </div>

                    <div className='ml-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="13" viewBox="0 0 21 13" fill="none" onClick={() => { handleToggleModal() }}>
                            <rect width="21" height="3" rx="1" fill="white" />
                            <rect y="5" width="21" height="3" rx="1" fill="white" />
                            <rect y="10" width="21" height="3" rx="1" fill="white" />
                        </svg>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Navbar