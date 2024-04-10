'use client'

import CustomImageUpload from "./CustomImageUpload";
import React, { useState } from "react";
import './FormComp.css'

const FormComp = () => {
    const [project, setProject] = useState(true);

    const handleFileSelect = (file) => {
        // Handle the selected file
        console.log('Selected file:', file);
    };

    const toggleProject = () => {
        setProject(!project)
    }

    return (

        <>
            <div className="main-chart-container py-3 res-body-padding lg:px-40 px-4">
                <div className="w-full flex flex-col justify-center items-center px-6 lg:px-6 lg:py-12 ">
                    <div className="form dark:bg-[#EFEFEF] res-form md:min-w-[553px] md:px-8  md:py-8 px-4 py-4 rounded-[10px] bg-[#23252A]">
                        <div className="w-full flex justify-center items-center">
                            <p className="iceland text-white dark:text-black font-normal text-3xl">Submit new Coin</p>
                        </div>

                        <form className="flex mt-8 flex-col gap-5">
                            <div className="">
                                <CustomImageUpload onFileSelect={handleFileSelect} />
                            </div>

                            <div className="flex w-full lg:flex-row flex-col gap-5">
                                <div className="relative lg:w-1/2 w-full">
                                    <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                                    </div>
                                    <input className=" w-full border border-[#FFFFFF1A] dark:border:none font-medium text-sm bg-[#191B20] dark:bg-white px-6 py-4 rounded-[10px]" placeholder="Enter Token Name"></input>
                                    <div className=' absolute bottom-right-cut-index bg-[#191B20] dark:bg-white'>

                                    </div>
                                </div>
                                <div className="relative lg:w-1/2 w-full">
                                    <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                                    </div>
                                    <input className=" w-full border border-[#FFFFFF1A] dark:border:none font-medium text-sm bg-[#191B20] dark:bg-white px-6 py-4 rounded-[10px]" placeholder="Enter Token Name"></input>
                                    <div className=' absolute bottom-right-cut-index bg-[#191B20] dark:bg-white'>

                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full relative lg:flex-row flex-col gap-5">
                                <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                                <input className="w-full border border-[#FFFFFF1A] dark:border:none font-medium text-sm bg-[#191B20] dark:bg-white px-6 py-4 rounded-[10px]" placeholder="Contact address"></input>
                                <div className=' absolute bottom-right-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                            </div>

                            <div className="bg-[#343434] items-center px-6 py-4 rounded-[10px] w-full flex justify-between font-medium text-sm dark:bg-[#D6D6D6]">
                                <p className="text-[#DBDBDB] dark:text-[#000000] opacity-50">Network Chain</p>
                                <div>
                                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="dark:fill-black" opacity="0.5" d="M4.73132 5.59497L8.83131 0.148737H0.63134L4.73132 5.59497Z" fill="#D9D9D9" />
                                    </svg>
                                </div>
                            </div>

                            <div className="w-full flex justify-between">
                                <p className="font-medium text-sm text-[#DBDBDB] dark:text-black">Project in presale phase?</p>

                                <div className="flex relative z-50 items-center cursor-pointer" onClick={toggleProject}>
                                    <div className={`w-[60px] h-[30px]  relative  flex items-center bg-[#111111] rounded-[10px]`}>
                                        <div className={`bg-[#CFFA00] w-[30px] h-[30px] rounded-[10px] shadow-md transform duration-300 flex justify-center items-center ease-in-out ${project ? 'translate-x-full' : ''}`}>
                                            <div>
                                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.50391 5.0462L4.77421 8.06487L10.6636 1.69482" stroke="black" stroke-width="2.5" />
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full relative">
                                <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                                <textarea placeholder="Enter Description" className="w-full h-full border border-[#FFFFFF1A] dark:border:none font-medium text-sm bg-[#191B20] dark:bg-white px-6 py-4 rounded-[10px] resize-none"></textarea>
                                <div className=' absolute bottom-right-cut-index-textarea bg-[#191B20] dark:bg-white'>

                                </div>
                            </div>

                            <div className="flex lg:flex-row flex-col w-full gap-4 mt-6">
                                <div className="lg:w-[40%] w-full">
                                    <div className="w-full py-4 lg:py-0 border border-[#CFFA00] h-full flex justify-center items-center rounded-[10px]">
                                        <p className="text-[#FFFFFF] opacity-50 dark:text-black font-bold text-sm">Go Back</p>
                                    </div>
                                </div>

                                <div className="lg:w-[60%] relative w-full">
                                    <div className='w-full bg-[#CFFA00] justify-start pl-6 flex py-4 rounded-[10px] '>
                                        <p className='font-bold text-sm text-black'>Save and Next</p>
                                    </div>
                                    <div className='absolute right-[-10px] bottom-[-2px]'>
                                        <div className=' h-[56px] w-[53px] '>
                                            <img src='/Images/btnfooter.png' className='w-full h-full'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>


                    </div>


                    {/* different page form */}

                    <div className="form dark:bg-[#EFEFEF] mt-10 res-form md:min-w-[553px] md:px-8  md:py-8 px-4 py-4 rounded-[10px] bg-[#23252A]">
                        <div className="w-full flex justify-center items-center">
                            <p className="iceland text-white dark:text-black font-normal text-3xl">Submit new Coin</p>
                        </div>

                        <form className="flex mt-8 flex-col gap-5">
                            <div className="flex w-full relative lg:flex-row flex-col gap-5">
                                <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                                <input className="w-full border border-[#FFFFFF1A] dark:border:none font-medium text-sm bg-[#191B20] dark:bg-white px-6 py-4 rounded-[10px]" placeholder="YouTube link"></input>
                                <div className=' absolute bottom-right-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                            </div>

                            <div className="w-full flex justify-between">
                                <p className="font-medium text-sm text-[#DBDBDB] dark:text-black">Project in presale phase?</p>

                                <div className="flex relative z-50 items-center cursor-pointer" onClick={toggleProject}>
                                    <div className={`w-[60px] h-[30px]  relative  flex items-center bg-[#111111] rounded-[10px]`}>
                                        <div className={`bg-[#CFFA00] w-[30px] h-[30px] rounded-[10px] shadow-md transform duration-300 flex justify-center items-center ease-in-out ${project ? 'translate-x-full' : ''}`}>
                                            <div>
                                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.50391 5.0462L4.77421 8.06487L10.6636 1.69482" stroke="black" stroke-width="2.5" />
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex w-full relative lg:flex-row flex-col gap-5">
                                <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                                <input className="w-full border border-[#FFFFFF1A] dark:border:none font-medium text-sm bg-[#191B20] dark:bg-white px-6 py-4 rounded-[10px]" placeholder="Custom chart link ( Optional )"></input>
                                <div className=' absolute bottom-right-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                            </div>
                            <div className="flex w-full relative lg:flex-row flex-col gap-5">
                                <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                                <input className="w-full border border-[#FFFFFF1A] dark:border:none font-medium text-sm bg-[#191B20] dark:bg-white px-6 py-4 rounded-[10px]" placeholder="Custom swap link ( Optional )"></input>
                                <div className=' absolute bottom-right-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                            </div>
                            <div className="flex w-full relative lg:flex-row flex-col gap-5">
                                <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                                <input className="w-full border border-[#FFFFFF1A] dark:border:none font-medium text-sm bg-[#191B20] dark:bg-white px-6 py-4 rounded-[10px]" placeholder="Website link"></input>
                                <div className=' absolute bottom-right-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                            </div>
                            <div className="flex w-full relative lg:flex-row flex-col gap-5">
                                <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                                <input className="w-full border border-[#FFFFFF1A] dark:border:none font-medium text-sm bg-[#191B20] dark:bg-white px-6 py-4 rounded-[10px]" placeholder="Telegram link"></input>
                                <div className=' absolute bottom-right-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                            </div>
                            <div className="flex w-full relative lg:flex-row flex-col gap-5">
                                <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                                <input className="w-full border border-[#FFFFFF1A] dark:border:none font-medium text-sm bg-[#191B20] dark:bg-white px-6 py-4 rounded-[10px]" placeholder="Twitter link"></input>
                                <div className=' absolute bottom-right-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                            </div>
                            <div className="flex w-full relative lg:flex-row flex-col gap-5">
                                <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                                <input className="w-full border border-[#FFFFFF1A] dark:border:none font-medium text-sm bg-[#191B20] dark:bg-white px-6 py-4 rounded-[10px]" placeholder="Discord link"></input>
                                <div className=' absolute bottom-right-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                            </div>
                            <div className="flex w-full relative lg:flex-row flex-col gap-5">
                                <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                                <input className="w-full border border-[#FFFFFF1A] dark:border:none font-medium text-sm bg-[#191B20] dark:bg-white px-6 py-4 rounded-[10px]" placeholder="Whitepaper link ( optional )"></input>
                                <div className=' absolute bottom-right-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                            </div>
                            <div className="flex w-full relative lg:flex-row flex-col gap-5">
                                <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                                <input className="w-full border border-[#FFFFFF1A] dark:border:none font-medium text-sm bg-[#191B20] dark:bg-white px-6 py-4 rounded-[10px]" placeholder="Contact Email"></input>
                                <div className=' absolute bottom-right-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                            </div>
                            <div className="flex w-full relative lg:flex-row flex-col gap-5">
                                <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                                <input className="w-full border border-[#FFFFFF1A] dark:border:none font-medium text-sm bg-[#191B20] dark:bg-white px-6 py-4 rounded-[10px]" placeholder="Contact Telegram"></input>
                                <div className=' absolute bottom-right-cut-index bg-[#191B20] dark:bg-white'>

                                </div>
                            </div>

                            <div className="w-full flex justify-between">
                                <div className="flex items-center gap-1">
                                    <p className="font-medium text-sm text-[#DBDBDB] dark:text-black">I agree to the</p>
                                    <p className="font-medium text-sm text-[#CFFA00] dark:text-black">Terms and confitions*</p>
                                </div>


                                <div className="flex relative z-50 items-center cursor-pointer" onClick={toggleProject}>
                                    <div className={`w-[60px] h-[30px]  relative  flex items-center bg-[#111111] rounded-[10px]`}>
                                        <div className={`bg-[#CFFA00] w-[30px] h-[30px] rounded-[10px] shadow-md transform duration-300 flex justify-center items-center ease-in-out ${project ? 'translate-x-full' : ''}`}>
                                            <div>
                                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.50391 5.0462L4.77421 8.06487L10.6636 1.69482" stroke="black" stroke-width="2.5" />
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex lg:flex-row flex-col w-full gap-4 mt-6">
                                <div className="lg:w-[40%] w-full">
                                    <div className="w-full py-4 lg:py-0 border border-[#CFFA00] h-full flex justify-center items-center rounded-[10px]">
                                        <p className="text-[#FFFFFF] opacity-50 dark:text-black font-bold text-sm">Go Back</p>
                                    </div>
                                </div>

                                <div className="lg:w-[60%] relative w-full">
                                    <div className='w-full bg-[#CFFA00] justify-start pl-6 flex py-4 rounded-[10px] '>
                                        <p className='font-bold text-sm text-black'>Save and Next</p>
                                    </div>
                                    <div className='absolute right-[-10px] bottom-[-2px]'>
                                        <div className=' h-[56px] w-[53px] '>
                                            <img src='/Images/btnfooter.png' className='w-full h-full'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}


export default FormComp;