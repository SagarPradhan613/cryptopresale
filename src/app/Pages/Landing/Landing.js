'use client'
import React, { useState } from 'react'
import PromotedTable from '@/app/Components/PromotedTable'
import './Landing.css'
import { Pagination } from "flowbite-react";

const Landing = () => {

    const data = [
        {
            coin: 1,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
        {
            coin: 2,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
        {
            coin: 3,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
        {
            coin: 4,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
        {
            coin: 5,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
        {
            coin: 6,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
        {
            coin: 7,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
        {
            coin: 8,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
        {
            coin: 9,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
        {
            coin: 10,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
        {
            coin: 11,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
        {
            coin: 12,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
        {
            coin: 13,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
        {
            coin: 14,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
        {
            coin: 15,
            coinimg: '/Images/coinpp.png',
            coinSf: 'BTCETF',
            coinFF: 'Bitcoin ETF Token',
            audit: true,
            kyc: true,
            chainimg: '/Images/eth.png',
            chain: "ETH",
            marketCap: "Presale",
            price: "5M USDT",
            change: "15M USDT",
            launch: "in 1 Month",
            submitted: "2 min ago",
            star: true,

        },
    ]


    const [currentPage, setCurrentPage] = useState(1); // Define currentPage state

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    // Your data array and other code

    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);




    const [isActive, setIsActive] = useState(false);

    const handleDoubleClick = () => {
        setIsActive(!isActive);
    };

    const [isActive2, setIsActive2] = useState(false);

    const handleDoubleClick2 = () => {
        setIsActive2(!isActive2);
    };

    const RightSvg = () => {
        return (
            <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.07178 7.47607C1.07178 4.02429 3.87 1.22607 7.32178 1.22607H28.0173C31.4691 1.22607 34.2673 4.02429 34.2673 7.47607V22.6668C34.2673 24.362 33.5787 25.9845 32.3594 27.1622L27.0106 32.3285C25.8454 33.4539 24.2886 34.083 22.6686 34.083H7.32177C3.86999 34.083 1.07178 31.2848 1.07178 27.833V7.47607Z" stroke="#CFFA00" stroke-width="1.5" />
                <path d="M12.4202 16.368H22.8938" stroke="#CFFA00" stroke-width="1.5" />
                <path d="M19.4849 13.02L22.9184 16.3659L19.4849 19.7657" stroke="#CFFA00" stroke-width="1.5" />
            </svg>

        )
    };

    const LeftSvg = () => {
        return (
            <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.3311 7.47607C34.3311 4.02429 31.5328 1.22607 28.0811 1.22607H7.38552C3.93374 1.22607 1.13552 4.02429 1.13552 7.47607V22.6668C1.13552 24.362 1.82414 25.9845 3.04346 27.1622L8.39219 32.3285C9.55745 33.4539 11.1142 34.083 12.7343 34.083H28.0811C31.5328 34.083 34.3311 31.2848 34.3311 27.833V7.47607Z" stroke="#CFFA00" stroke-width="1.5" />
                <path d="M22.9827 16.368H12.5091" stroke="#CFFA00" stroke-width="1.5" />
                <path d="M15.918 13.02L12.4844 16.3659L15.918 19.7657" stroke="#CFFA00" stroke-width="1.5" />
            </svg>

        );
    };


    return (
        <>
            <div className="w-full res-body-padding px-4 lg:px-40 -mt-1  py-16">
                <div className="w-full text-white dark:text-black text-5xl font-normal iceland flex justify-center items-center">
                    Presales
                </div>

                {/* promoted */}

                {/* <div className='w-full flex justify-start pl-10 items-center'>
                    <p className='iceland font-normal text-3xl dark:text-black text-white'>Promoted</p>
                </div> */}

                {/* table */}


                <PromotedTable />


                {/* all tokens */}

                <div className='w-full flex justify-start pt-4 items-center'>
                    <p className='iceland font-normal text-3xl dark:text-black text-white'>All Tokens</p>
                </div>


                {/* table */}
                <div className="flex flex-col   mt-3  w-full relative" >
                    <div className='lg:block hidden absolute top-left-cut bg-[#191B20] dark:bg-white'>

                    </div>
                    <div className="bg-[#23252A] pt-4 pb-8 px-6 lg:px-12 res-table-title table-header  lg:rounded-[20px] w-full flex justify-between items-center text-[#C5C6C7]">
                        <div className='w-[60%] flex justify-between items-center'>
                            <div className='flex res-text-sm items-center gap-1'>
                                <p className='text-base res-text-base'>All chains</p>
                                <div>
                                    <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.37488 4.3623L6.49551 0.216999H0.254248L3.37488 4.3623Z" fill="#D9D9D9" />
                                    </svg>
                                </div>
                            </div>

                            <div className='flex ml-4 items-center gap-4'>
                                <div className='flex flex-col md:flex-row border-[#C5C6C7] items-center border rounded-[11px] py-2 px-3 gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <p className='font-normal res-text-sm lg:text-sm'>Audit</p>
                                        <div className="relative w-[22px] h-[11px] bg-[#6c6d70] rounded-full p-1" onClick={handleDoubleClick}>
                                            <div className={`absolute inset-0 w-[10px] h-[10px] bg-[#CFFA00] rounded-full transition-transform duration-300 ease-in-out ${isActive ? 'transform translate-x-full' : ''}`}></div>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-1'>
                                        <p className='text-base res-text-base'>Select Companies</p>
                                        <div>
                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.37488 4.3623L6.49551 0.216999H0.254248L3.37488 4.3623Z" fill="#D9D9D9" />
                                            </svg>
                                        </div>
                                    </div>

                                </div>

                                <div className='flex flex-col md:flex-row border-[#C5C6C7] items-center border rounded-[11px] py-2 px-3 gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <p className='font-normal res-text-sm lg:text-sm'>KYC</p>
                                        <div className="relative w-[22px] h-[11px] bg-[#6c6d70] rounded-full p-1" onClick={handleDoubleClick2}>
                                            <div className={`absolute inset-0 w-[10px] h-[10px] bg-[#CFFA00] rounded-full transition-transform duration-300 ease-in-out ${isActive2 ? 'transform translate-x-full' : ''}`}></div>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-1'>
                                        <p className='text-base res-text-base'>Select Companies</p>
                                        <div>
                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.37488 4.3623L6.49551 0.216999H0.254248L3.37488 4.3623Z" fill="#D9D9D9" />
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div>
                            <div className='flex items-center gap-1'>
                                <p className='text-base res-text-base'>Sort by</p>
                                <div>
                                    <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.37488 4.3623L6.49551 0.216999H0.254248L3.37488 4.3623Z" fill="#D9D9D9" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* mob table */}
                    <div className='res-tab w-full relative  pb-6 block lg:hidden border dark:border-[black] border-[#343840]'>
                        <table className='border-none w-full  mob-table border-[#FFFFFF1A] dark:border-[black] rounded-[20px]'>
                            <thead className='relative z-20 rounded-[20px] bg-[#2E3034]  rounded-b-[20px] '>
                                <tr className='rounded-[20px] opacity-50 text-[#C5C6C7] font-normal res-text-sm  text-sm'>
                                    <th className='py-3  text-[#C5C6C7]'>#</th>
                                    <th className='text-left'>Coin</th>
                                    <th className='text-left' >Badges</th>
                                    <th className='text-left' >Chain</th>
                                    <th className='text-left' >Market Cap</th>
                                    <th className='text-left' >Price</th>
                                    <th className='text-left' >Change 24h</th>
                                    <th className='text-left' >Launch</th>
                                    <th className='text-left' >Boost</th>
                                    <th className='text-left' >Submitted</th>
                                    <th className=''></th>
                                </tr>
                            </thead>
                            <tbody className=' rounded-[20px]'>
                                <tr className='rounded-[20px]'>
                                    <th className='bottom-left-radius px-4 text-[#646464] font-normal responsive-text text-base res-text-base'>1</th>
                                    <th className=' py-3 border-b border-[#c6c6c6] border-opacity-60'>
                                        <div className='flex text-left gap-4 items-center'>
                                            <img src='/Images/coinpp.png' className='max-w-[39px] max-h-[39px] res-coin-img'></img>
                                            <div className='flex flex-col justify-start items-start'>
                                                <p className='font-bold responsive-text text-base res-text-base text-left text-white dark:text-[#2B2A2A]'>BTCETF</p>
                                                <p className='font-medium small-responsive-text text-left res-text-sm  text-sm text-[#848484]'>Bitcoin ETF Token</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th className='border-b py-3  border-[#c6c6c6] border-opacity-60'>
                                        <div className='flex text-left flex-col gap-1'>
                                            <div className='max-w-[61px]'>
                                                <img src='/Images/lightaudit.png'></img>
                                            </div>
                                            <div className='max-w-[68px]'>
                                                <img src='/Images/lightkyc.png' className='w-full h-full'></img>
                                            </div>

                                        </div>
                                    </th>
                                    <th className='border-b py-3 border-[#c6c6c6] border-opacity-60'>
                                        <div className='flex text-left items-center gap-2'>
                                            <img src='/Images/eth.png' className='max-w-[25px] res-eth-img'></img>
                                            <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>ETH</p>
                                        </div>
                                    </th>
                                    <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                        <div className='flex text-left items-center'>
                                            <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>Presale</p>
                                        </div>
                                    </th>
                                    <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                        <div className='flex text-left flex-col justify-start items-start'>
                                            <p className='font-bold text-[10px] res-text-xs  text-[#646464]'>Softcap</p>
                                            <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>5M USDT</p>
                                        </div>
                                    </th>
                                    <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                        <div className='flex text-left flex-col justify-start items-start'>
                                            <p className='font-bold text-[10px] res-text-xs  text-[#646464]'>HardCap</p>
                                            <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>15M USDT</p>
                                        </div>
                                    </th>
                                    <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                        <div className='flex  text-left items-center'>
                                            <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>in 1 Month</p>
                                        </div>
                                    </th>
                                    <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                        <div className='flex text-left items-center gap-3'>
                                            <div>
                                                <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >x1,722</p>

                                                <div className='relative mt-1'>
                                                    <div className='flex sm-boosted items-center  z-20 justify-center bg-[#CFFA00] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                                        Boost
                                                    </div>
                                                    <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >+24</p>

                                                <div className='relative mt-1'>
                                                    <div className='flex sm-boosted items-center  z-20 justify-center bg-[#5AEFDF] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                                        Vote
                                                    </div>
                                                    <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </th>
                                    <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                        <div className='flex text-left items-center'>
                                            <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>2 min ago</p>
                                        </div>
                                    </th>
                                    <th className='rounded-[20px] px-4 py-2 '>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.81414 1.10109C7.96382 0.640434 8.61553 0.640438 8.7652 1.10109L9.9755 4.82602C10.1763 5.44405 10.7522 5.86249 11.4021 5.86249H15.3187C15.8031 5.86249 16.0045 6.4823 15.6126 6.767L12.444 9.06913C11.9183 9.4511 11.6983 10.1281 11.8991 10.7462L13.1094 14.4711C13.2591 14.9318 12.7318 15.3148 12.34 15.0301L9.17135 12.728C8.64562 12.346 7.93373 12.346 7.408 12.728L4.23939 15.0301C3.84753 15.3148 3.32029 14.9318 3.46996 14.4711L4.68026 10.7462C4.88108 10.1281 4.66109 9.4511 4.13536 9.06913L0.966748 6.767C0.574889 6.4823 0.77628 5.86249 1.26064 5.86249H5.17726C5.8271 5.86249 6.40303 5.44405 6.60384 4.82602L7.81414 1.10109Z" stroke="#646464" />
                                        </svg>
                                    </th>
                                </tr>

                                <tr className='rounded-[20px]'>
                                    <th className='bottom-left-radius px-4 text-[#646464] font-normal responsive-text text-base res-text-base'>1</th>
                                    <th className=' py-3 '>
                                        <div className='flex text-left gap-4 items-center'>
                                            <img src='/Images/coinpp.png' className='max-w-[39px] max-h-[39px] res-coin-img'></img>
                                            <div className='flex flex-col justify-start items-start'>
                                                <p className='font-bold responsive-text text-base res-text-base text-left text-white dark:text-[#2B2A2A]'>BTCETF</p>
                                                <p className='font-medium small-responsive-text text-left res-text-sm  text-sm text-[#848484]'>Bitcoin ETF Token</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th className=' py-3  '>
                                        <div className='flex text-left flex-col gap-1'>
                                            <div className='max-w-[61px]'>
                                                <img src='/Images/lightaudit.png'></img>
                                            </div>
                                            <div className='max-w-[68px]'>
                                                <img src='/Images/lightkyc.png' className='w-full h-full'></img>
                                            </div>

                                        </div>
                                    </th>
                                    <th className=' py-3 '>
                                        <div className='flex text-left items-center gap-2'>
                                            <img src='/Images/eth.png' className='max-w-[25px] res-eth-img'></img>
                                            <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>ETH</p>
                                        </div>
                                    </th>
                                    <th className=''>
                                        <div className='flex text-left items-center'>
                                            <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>Presale</p>
                                        </div>
                                    </th>
                                    <th className=''>
                                        <div className='flex text-left flex-col justify-start items-start'>
                                            <p className='font-bold text-[10px] res-text-xs  text-[#646464]'>Softcap</p>
                                            <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>5M USDT</p>
                                        </div>
                                    </th>
                                    <th className=''>
                                        <div className='flex text-left flex-col justify-start items-start'>
                                            <p className='font-bold text-[10px] res-text-xs  text-[#646464]'>HardCap</p>
                                            <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>15M USDT</p>
                                        </div>
                                    </th>
                                    <th className=''>
                                        <div className='flex  text-left items-center'>
                                            <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>in 1 Month</p>
                                        </div>
                                    </th>
                                    <th className=''>
                                        <div className='flex text-left items-center gap-3'>
                                            <div>
                                                <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >x1,722</p>

                                                <div className='relative mt-1'>
                                                    <div className='flex sm-boosted items-center  z-20 justify-center bg-[#CFFA00] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                                        Boost
                                                    </div>
                                                    <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >+24</p>

                                                <div className='relative mt-1'>
                                                    <div className='flex sm-boosted items-center  z-20 justify-center bg-[#5AEFDF] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                                        Vote
                                                    </div>
                                                    <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </th>
                                    <th className=''>
                                        <div className='flex text-left items-center'>
                                            <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>2 min ago</p>
                                        </div>
                                    </th>
                                    <th className='rounded-[20px] px-4 py-2 '>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.81414 1.10109C7.96382 0.640434 8.61553 0.640438 8.7652 1.10109L9.9755 4.82602C10.1763 5.44405 10.7522 5.86249 11.4021 5.86249H15.3187C15.8031 5.86249 16.0045 6.4823 15.6126 6.767L12.444 9.06913C11.9183 9.4511 11.6983 10.1281 11.8991 10.7462L13.1094 14.4711C13.2591 14.9318 12.7318 15.3148 12.34 15.0301L9.17135 12.728C8.64562 12.346 7.93373 12.346 7.408 12.728L4.23939 15.0301C3.84753 15.3148 3.32029 14.9318 3.46996 14.4711L4.68026 10.7462C4.88108 10.1281 4.66109 9.4511 4.13536 9.06913L0.966748 6.767C0.574889 6.4823 0.77628 5.86249 1.26064 5.86249H5.17726C5.8271 5.86249 6.40303 5.44405 6.60384 4.82602L7.81414 1.10109Z" stroke="#646464" />
                                        </svg>
                                    </th>
                                </tr>

                                {currentItems.map((item, index) => (
                                    <tr className='rounded-[20px]'>
                                        <th className='bottom-left-radius px-4 text-[#646464] font-normal responsive-text text-base res-text-base'>{item.coin}</th>
                                        <th className=' py-3 border-b border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left gap-4 items-center'>
                                                <img src={item.coinimg} className='max-w-[39px] max-h-[39px] res-coin-img'></img>
                                                <div className='flex flex-col justify-start items-start'>
                                                    <p className='font-bold responsive-text text-base res-text-base text-left text-white dark:text-[#2B2A2A]'>{item.coinSf}</p>
                                                    <p className='font-medium small-responsive-text text-left res-text-sm  text-sm text-[#848484]'>{item.coinFF}</p>
                                                </div>
                                            </div>
                                        </th>
                                        <th className='border-b py-3  border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left flex-col gap-1'>
                                                {item.audit ?
                                                    <>
                                                        <div className='max-w-[61px]'>
                                                            <img src='/Images/lightaudit.png'></img>
                                                        </div>
                                                    </>
                                                    :
                                                    null
                                                }
                                                {item.kyc ?
                                                    <>
                                                        <div className='max-w-[68px]'>
                                                            <img src='/Images/lightkyc.png' className='w-full h-full'></img>
                                                        </div>
                                                    </>
                                                    :
                                                    null

                                                }

                                            </div>
                                        </th>
                                        <th className='border-b py-3 border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left items-center gap-2'>
                                                <img src={item.chainimg} className='max-w-[25px] res-eth-img'></img>
                                                <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>{item.chain}</p>
                                            </div>
                                        </th>
                                        <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left items-center'>
                                                <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>{item.marketCap}</p>
                                            </div>
                                        </th>
                                        <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left flex-col justify-start items-start'>
                                                <p className='font-bold text-[10px] res-text-xs  text-[#646464]'>Softcap</p>
                                                <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>{item.price}</p>
                                            </div>
                                        </th>
                                        <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left flex-col justify-start items-start'>
                                                <p className='font-bold text-[10px] res-text-xs  text-[#646464]'>HardCap</p>
                                                <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>{item.change}</p>
                                            </div>
                                        </th>
                                        <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex  text-left items-center'>
                                                <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>{item.launch}</p>
                                            </div>
                                        </th>
                                        <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left items-center gap-3'>
                                                <div>
                                                    <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >x1,722</p>

                                                    <div className='relative mt-1'>
                                                        <div className='flex sm-boosted items-center  z-20 justify-center bg-[#CFFA00] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                                            Boost
                                                        </div>
                                                        <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >+24</p>

                                                    <div className='relative mt-1'>
                                                        <div className='flex sm-boosted items-center  z-20 justify-center bg-[#5AEFDF] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                                            Vote
                                                        </div>
                                                        <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </th>
                                        <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left items-center'>
                                                <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>{item.submitted}</p>
                                            </div>
                                        </th>
                                        <th className='rounded-[20px] px-4 py-2 '>
                                            {item.star ?
                                                <>
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.81414 1.10109C7.96382 0.640434 8.61553 0.640438 8.7652 1.10109L9.9755 4.82602C10.1763 5.44405 10.7522 5.86249 11.4021 5.86249H15.3187C15.8031 5.86249 16.0045 6.4823 15.6126 6.767L12.444 9.06913C11.9183 9.4511 11.6983 10.1281 11.8991 10.7462L13.1094 14.4711C13.2591 14.9318 12.7318 15.3148 12.34 15.0301L9.17135 12.728C8.64562 12.346 7.93373 12.346 7.408 12.728L4.23939 15.0301C3.84753 15.3148 3.32029 14.9318 3.46996 14.4711L4.68026 10.7462C4.88108 10.1281 4.66109 9.4511 4.13536 9.06913L0.966748 6.767C0.574889 6.4823 0.77628 5.86249 1.26064 5.86249H5.17726C5.8271 5.86249 6.40303 5.44405 6.60384 4.82602L7.81414 1.10109Z" stroke="#646464" />
                                                    </svg>
                                                </>
                                                :
                                                null
                                            }
                                        </th>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                        <div className='lg:hidden flex w-full mt-2 justify-center items-center'>
                            <Pagination className='custom-pagination mob-pagination-gap' previousLabel={LeftSvg()} nextLabel={RightSvg()} currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                        </div>
                    </div>

                    {/* desk table */}
                    <div className='relative w-full pb-6 lg:block hidden border dark:border-[black] border-[#343840]'>
                        <table className='-mt-4 w-full border desk-table  border-none rounded-[20px]'>
                            <thead className='relative z-20 rounded-[20px] bg-[#2E3034] -mt-4 rounded-b-[20px] '>
                                <tr className='rounded-[20px] opacity-50 text-[#C5C6C7] font-normal res-text-sm  text-sm'>
                                    <th className='py-3 bottom-left-radius text-[#C5C6C7]'>#</th>
                                    <th className='text-left'>Coin</th>
                                    <th className='text-left' >Badges</th>
                                    <th className='text-left' >Chain</th>
                                    <th className='text-left' >Market Cap</th>
                                    <th className='text-left' >Price</th>
                                    <th className='text-left' >Change 24h</th>
                                    <th className='text-left' >Launch</th>
                                    <th className='text-left' >Boost/Votes 24h</th>
                                    <th className='text-left' >Submitted</th>
                                    <th className='bottom-right-radius'></th>
                                </tr>
                            </thead>
                            <tbody className=' rounded-[20px]'>
                                {currentItems.map((item, index) => (
                                    <tr key={index} className='rounded-[20px]'>
                                        <th className='bottom-left-radius px-4 text-[#646464] font-normal responsive-text text-base res-text-base'>{item.coin}</th>
                                        <th className=' py-3 border-b border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left gap-4 items-center'>
                                                <img src={item.coinimg} className='max-w-[39px] max-h-[39px] res-coin-img'></img>
                                                <div className='flex flex-col justify-start items-start'>
                                                    <p className='font-bold responsive-text text-base res-text-base text-left text-white dark:text-[#2B2A2A]'>{item.coinSf}</p>
                                                    <p className='font-medium small-responsive-text text-left res-text-sm  text-sm text-[#848484]'>{item.coinFF}</p>
                                                </div>
                                            </div>
                                        </th>
                                        <th className='border-b py-3  border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left flex-col gap-1'>
                                                {item.audit ?
                                                    <>
                                                        <div className='max-w-[61px]'>
                                                            <img src='/Images/lightaudit.png'></img>
                                                        </div>
                                                    </>
                                                    :
                                                    null
                                                }
                                                {item.kyc ?
                                                    <>
                                                        <div className='max-w-[68px]'>
                                                            <img src='/Images/lightkyc.png' className='w-full h-full'></img>
                                                        </div>
                                                    </>
                                                    :
                                                    null

                                                }
                                            </div>
                                        </th>
                                        <th className='border-b py-3 border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left items-center gap-2'>
                                                <img src={item.chainimg} className='max-w-[25px] res-eth-img'></img>
                                                <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>{item.chain}</p>
                                            </div>
                                        </th>
                                        <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left items-center'>
                                                <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>{item.marketCap}</p>
                                            </div>
                                        </th>
                                        <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left flex-col justify-start items-start'>
                                                <p className='font-bold text-[10px] res-text-xs  text-[#646464]'>Softcap</p>
                                                <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>{item.price}</p>
                                            </div>
                                        </th>
                                        <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left flex-col justify-start items-start'>
                                                <p className='font-bold text-[10px] res-text-xs  text-[#646464]'>HardCap</p>
                                                <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>{item.change}</p>
                                            </div>
                                        </th>
                                        <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex  text-left items-center'>
                                                <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>{item.launch}</p>
                                            </div>
                                        </th>
                                        <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left items-center gap-3'>
                                                <div>
                                                    <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >x1,722</p>

                                                    <div className='relative mt-1'>
                                                        <div className='flex sm-boosted items-center  z-20 justify-center bg-[#CFFA00] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                                            Boost
                                                        </div>
                                                        <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >+24</p>

                                                    <div className='relative mt-1'>
                                                        <div className='flex sm-boosted items-center  z-20 justify-center bg-[#5AEFDF] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                                            Vote
                                                        </div>
                                                        <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </th>
                                        <th className='border-b border-[#c6c6c6] border-opacity-60'>
                                            <div className='flex text-left items-center'>
                                                <p className='font-medium responsive-text text-base res-text-base text-white dark:text-[#2B2A2A]'>{item.submitted}</p>
                                            </div>
                                        </th>
                                        <th className='rounded-[20px] px-4 py-2 '>
                                            {item.star ?
                                                <>
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.81414 1.10109C7.96382 0.640434 8.61553 0.640438 8.7652 1.10109L9.9755 4.82602C10.1763 5.44405 10.7522 5.86249 11.4021 5.86249H15.3187C15.8031 5.86249 16.0045 6.4823 15.6126 6.767L12.444 9.06913C11.9183 9.4511 11.6983 10.1281 11.8991 10.7462L13.1094 14.4711C13.2591 14.9318 12.7318 15.3148 12.34 15.0301L9.17135 12.728C8.64562 12.346 7.93373 12.346 7.408 12.728L4.23939 15.0301C3.84753 15.3148 3.32029 14.9318 3.46996 14.4711L4.68026 10.7462C4.88108 10.1281 4.66109 9.4511 4.13536 9.06913L0.966748 6.767C0.574889 6.4823 0.77628 5.86249 1.26064 5.86249H5.17726C5.8271 5.86249 6.40303 5.44405 6.60384 4.82602L7.81414 1.10109Z" stroke="#646464" />
                                                    </svg>
                                                </>
                                                :
                                                null
                                            }

                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className='lg:flex hidden w-full mt-2 justify-center items-center'>
                            <Pagination className='custom-pagination mob-pagination-gap' previousLabel={LeftSvg()} nextLabel={RightSvg()} currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;