'use client'
import React from 'react';
import { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose, setOpenPrivacy, handleToggleModal }) => {
    const [userChoice, setUserChoice] = useState(null);
    const [activeModal, setActiveModal] = useState(false);

    const handleAccept = () => {
        // Save user choice in local storage
        // localStorage.setItem('modalClosed', 'accept');
        // setUserChoice('accept');
        // onClose();
        setOpenPrivacy(false)
    };

    const handleDecline = () => {
        // Save user choice in local storage
        // localStorage.setItem('modalClosed', 'decline');
        // setUserChoice('decline');
        // onClose();
        setOpenPrivacy(false);
    };

    useEffect(() => {
        // Add CSS to disable scrolling when the modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }

        return () => {
            // Cleanup when the component unmounts
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        };
    }, [isOpen]);



    if (!isOpen || userChoice) {
        return null; // Do not render the modal if user has made a choice or it's not open
    }
    return (
        <div className="modal  fixed inset-0 flex  bg-[#191B20] bg-opacity-25 z-[100] backdrop-blur-sm">

            <div className='bg-[#191B20] h-screen w-screen relative rounded-[22px] px-10 flex flex-col pt-20'>
                <button
                    onClick={() => { handleToggleModal() }}
                    className="absolute top-4 right-6 text-white hover:text-gray-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className='flex flex-col justify-center align-middle items-center'>
                    <img src='Images/mainlogo.png' className='z-10 hover:transform hover:scale-110 hover:transition-transform hover:ease-in hover:duration-300 max-w-[100px]' ></img>
                </div>
                <div className='h-[1px] opacity-20 w-[90%] bg-white mt-6'>
                </div>
                <ul className="flex text-white flex-col lg:space-x-10 space-y-5 align-middle items-center mt-16 text-center  MADE_TOMMY_Regular_PERSONAL_USE">
                    <li>
                        <div className='flex items-center gap-2'>
                            <p>Coins</p>
                            <div className='mt-1'>
                                <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.32166 4.26331L6.44229 0.118H0.201025L3.32166 4.26331Z" fill="#D9D9D9" />
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/" target='_blank' className="text-base text-white hover:transform hover:scale-110 transform transition-transform duration-300">News</a>
                    </li>
                    <li>
                        <a href="/" className="text-base text-white hover:transform hover:scale-110 transform transition-transform duration-300">Education</a>
                    </li>
                    <li>
                        <div className='flex items-center gap-2'>
                            <p>Recomended</p>
                            <div className='mt-1'>
                                <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.32166 4.26331L6.44229 0.118H0.201025L3.32166 4.26331Z" fill="#D9D9D9" />
                                </svg>
                            </div>
                        </div>
                    </li>
                    {/* <li className='flex justify-center items-center'>
                        <div className=' hover:transform hover:scale-110 hover:transition-transform hover:ease-in hover:duration-300'>
                            <div className='bg-[#F00] text-white md:px-6 md:py-2 px-6 py-2 skew-btn rounded-[5px] mt-20 ' >
                                <p className='skew-div md:text-lg text-sm font-medium'>
                                    Open DAPP
                                </p>
                            </div>
                        </div>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};

export default Modal;
