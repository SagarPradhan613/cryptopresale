const PromotedTable = () => {
    return (
        <>
            <div className='w-full flex justify-start pl-10 items-center'>
                <p className='iceland font-normal text-3xl dark:text-black text-white'>Promoted</p>
            </div>
            <div className="flex flex-col   mt-3  w-full relative" >
                <div className='lg:block hidden absolute top-left-cut bg-[#191B20] dark:bg-white'>

                </div>
                <div className="bg-[#23252A] pt-4 pb-8 px-10  table-header  lg:rounded-[20px] w-full flex justify-between items-center text-[#CFFA00]">

                    <div className='flex gap-6 items-center'>
                        <div className='flex boosted items-center relative justify-center bg-[#CFFA00] rounded-[10px] py-2 px-6 font-bold res-text-sm  text-sm text-black'>
                            Boosted
                        </div>
                        <p className='text-[#CFFA00] lg:block hidden font-bold res-text-sm  text-sm'>Boost your tokens to get top of the list</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <p className='text-[#CFFA00] font-bold res-text-sm  text-sm' >See More</p>
                        <div>
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.675781 5.01677H12.6069" stroke="#CFFA00" stroke-width="1.3" />
                                <path d="M8.72363 1.20268L12.635 5.01417L8.72363 8.88716" stroke="#CFFA00" stroke-width="1.3" />
                            </svg>
                        </div>
                    </div>
                </div>



                {/* mob table */}
                <div className='res-tab w-full'>
                    <table className=' w-full border mob-table border-[#FFFFFF1A] dark:border-[black] rounded-[20px]'>
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
                                        <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >x1,722</p>

                                        <div className='relative'>
                                            <div className='flex sm-boosted items-center  z-20 justify-center bg-[#CFFA00] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                                Boost
                                            </div>
                                            <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

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
                                        <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >x1,722</p>

                                        <div className='relative'>
                                            <div className='flex sm-boosted items-center  z-20 justify-center bg-[#CFFA00] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                                Boost
                                            </div>
                                            <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

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
                        </tbody>
                    </table>
                </div>

                {/* desk table */}
                <table className='-mt-4 border desk-table  border-[#FFFFFF1A] dark:border-[black] rounded-[20px]'>
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
                            <th className='text-left' >Boost</th>
                            <th className='text-left' >Submitted</th>
                            <th className='bottom-right-radius'></th>
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
                                    <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >x1,722</p>

                                    <div className='relative'>
                                        <div className='flex sm-boosted items-center  z-20 justify-center bg-[#CFFA00] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                            Boost
                                        </div>
                                        <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

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
                                    <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >x1,722</p>

                                    <div className='relative'>
                                        <div className='flex sm-boosted items-center  z-20 justify-center bg-[#CFFA00] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                            Boost
                                        </div>
                                        <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

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
                                    <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >x1,722</p>

                                    <div className='relative'>
                                        <div className='flex sm-boosted items-center  z-20 justify-center bg-[#CFFA00] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                            Boost
                                        </div>
                                        <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

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
                                    <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >x1,722</p>

                                    <div className='relative'>
                                        <div className='flex sm-boosted items-center  z-20 justify-center bg-[#CFFA00] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                            Boost
                                        </div>
                                        <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

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
                                    <p className='font-medium text-xs text-white dark:text-[#2B2A2A]' >x1,722</p>

                                    <div className='relative'>
                                        <div className='flex sm-boosted items-center  z-20 justify-center bg-[#CFFA00] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                            Boost
                                        </div>
                                        <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

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
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default PromotedTable;