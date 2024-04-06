import './ChartComp.css'
import PromotedTable from '../Components/PromotedTable'

const ChartComp = () => {
    return (
        <>
            <div className="main-chart-container py-3 res-body-padding lg:px-40 px-4">
                <div className="w-full  flex justify-end items-center ">
                    <p className="iceland res-mar-right font-normal text-3xl dark:text-black text-white">0.00 $</p>
                </div>

                <div className="relative mt-6 w-full">
                    <div className='lg:block hidden absolute top-left-cut bg-[#191B20] dark:bg-white'>

                    </div>
                    <div className="w-full p-4 md:p-6 lg:p-8 flex lg:flex-row flex-col lg:justify-between items-center rounded-[10px] bg-[#23252A] dark:bg-[#EFEFEF]">
                        <div className="flex lg:flex-row flex-col items-center w-full">
                            <div className="max-w-[92px]">
                                <img src="/Images/chartpp.png"></img>
                            </div>
                            <div className="w-full">
                                <div className="flex  items-center mt-3 lg:mt-0 lg:ml-6 gap-2 lg:gap-3">
                                    <p className="font-semibold  res-3xl-text  text-white dark:text-black">Scorpion Casino</p>
                                    <img src="/Images/scorp.png" className="max-w-[57px] ml-2 lg:ml-5"></img>
                                    <img src="/Images/lightkyc.png" className="max-w-[68px]"></img>
                                    <img src="/Images/lightaudit.png" className="max-w-[61px]"></img>
                                </div>
                                <div className="flex flex-wrap items-center lg:ml-6 gap-2 lg:gap-3 mt-6">

                                    <div className="border-[#FFFFFF] dark:border-black flex gap-2 lg:gap-3 border-[0.5px] items-center p-2 rounded-[10px] border-opacity-30">
                                        <div>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.708984" y="0.532227" width="19.6844" height="19.6844" rx="6" fill="#181818" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7707 11.1733L13.9031 12.3024L10.8249 15.3774L7.74989 12.3024L8.88226 11.1733L10.8249 13.1159L12.7707 11.1733ZM10.8249 9.22749L11.9735 10.3761L10.8249 11.5248L9.67947 10.3794V10.3761L9.88121 10.1744L9.97883 10.0768L10.8249 9.22749ZM6.95268 9.24376L8.08505 10.3761L6.95268 11.5052L5.82031 10.3729L6.95268 9.24376ZM14.697 9.24376L15.8294 10.3761L14.697 11.5052L13.5647 10.3729L14.697 9.24376ZM10.8249 5.37158L13.8998 8.44654L12.7674 9.57891L10.8249 7.63306L8.88226 9.57566L7.74989 8.44654L10.8249 5.37158Z" fill="#F3BA2F" />
                                            </svg>
                                        </div>
                                        <p className="font-normal dark:text-black  text-sm text-white iceland">BSC</p>
                                        <div>
                                            <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.57202 0.890625L1.08496 7.8584" stroke="#44464B" />
                                            </svg>
                                        </div>
                                        <p className="font-normal dark:text-black  text-sm text-white iceland">0x3780...19A7</p>
                                        <div>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:stroke-black" fill-rule="evenodd" clip-rule="evenodd" d="M3.46263 0.782715H6.52418C7.1772 0.786289 7.80215 1.04915 8.26137 1.51348C8.72067 1.97781 8.97665 2.60556 8.9731 3.25864V6.26617C8.97665 6.91919 8.72067 7.54699 8.26137 8.01133C7.80215 8.4756 7.1772 8.73847 6.52418 8.7421H3.46263C2.80956 8.73847 2.18465 8.4756 1.72539 8.01133C1.26612 7.54699 1.01012 6.91919 1.01371 6.26617V3.25935C1.00993 2.60615 1.26585 1.97822 1.72513 1.51373C2.18441 1.04925 2.80943 0.786289 3.46263 0.782715Z" stroke="#CFFA00" stroke-linecap="round" stroke-linejoin="round" />
                                                <path className="dark:stroke-black" d="M4.33008 10.7319H7.71991C9.53109 10.7112 10.9827 9.22644 10.9626 7.41526V4.09863" stroke="#CFFA00" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </div>

                                    </div>
                                    <div className="border-[#FFFFFF] dark:border-black flex gap-2 lg:gap-3 border-[0.5px] items-center p-2 rounded-[10px] border-opacity-30">
                                        <div>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M18.0302 9.37448C18.0302 14.3124 14.0272 18.3154 9.08932 18.3154C4.15141 18.3154 0.148438 14.3124 0.148438 9.37448C0.148438 4.43656 4.15141 0.433594 9.08932 0.433594C14.0272 0.433594 18.0302 4.43656 18.0302 9.37448ZM9.40972 7.03415C8.54009 7.39586 6.80205 8.14451 4.1956 9.28009C3.77235 9.4484 3.55063 9.61306 3.53045 9.77406C3.49634 10.0462 3.83708 10.1533 4.30108 10.2992C4.3642 10.319 4.4296 10.3396 4.49664 10.3614C4.95315 10.5098 5.56723 10.6834 5.88646 10.6903C6.17604 10.6966 6.49924 10.5772 6.85607 10.3321C9.29135 8.68826 10.5485 7.85737 10.6274 7.83945C10.6831 7.82681 10.7602 7.81092 10.8125 7.85739C10.8648 7.90386 10.8596 7.99186 10.8541 8.01546C10.8203 8.15937 9.48281 9.40286 8.79064 10.0464C8.57485 10.247 8.42179 10.3893 8.3905 10.4218C8.32041 10.4946 8.24897 10.5634 8.18032 10.6296C7.75621 11.0385 7.43817 11.3451 8.19792 11.8457C8.56303 12.0863 8.85519 12.2853 9.14666 12.4838C9.46497 12.7005 9.78245 12.9168 10.1932 13.186C10.2979 13.2546 10.3978 13.3259 10.4952 13.3953C10.8656 13.6594 11.1984 13.8966 11.6096 13.8588C11.8485 13.8368 12.0953 13.6122 12.2206 12.9422C12.5168 11.3587 13.099 7.92788 13.2336 6.51412C13.2454 6.39026 13.2305 6.23173 13.2186 6.16215C13.2067 6.09256 13.1818 5.99341 13.0914 5.92002C12.9843 5.83309 12.8189 5.81476 12.7449 5.81607C12.4086 5.82199 11.8927 6.00139 9.40972 7.03415Z" fill="#DBDBDB" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:fill-black" d="M6.54321 0.890503L1.05615 7.85828" stroke="#44464B" />
                                            </svg>
                                        </div>
                                        <p className="font-normal text-sm text-white dark:text-black iceland">50K</p>
                                    </div>

                                    <div className="border-[#FFFFFF] dark:border-black flex gap-2 lg:gap-3 border-[0.5px] items-center p-2 rounded-[10px] border-opacity-30">
                                        <div>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M9.26179 18.3144C14.1992 18.3144 18.2018 14.3119 18.2018 9.37445C18.2018 4.43702 14.1992 0.434448 9.26179 0.434448C4.32435 0.434448 0.321777 4.43702 0.321777 9.37445C0.321777 14.3119 4.32435 18.3144 9.26179 18.3144ZM13.5065 5.24828H12.0302L9.59752 7.88521L7.49417 5.24828H4.44782L8.0877 9.76166L4.63793 13.5006H6.11515L8.77767 10.6157L11.1046 13.5006H14.0755L10.2812 8.74388L13.5065 5.24828ZM12.3301 12.6627H11.5121L6.17181 6.0422H7.04967L12.3301 12.6627Z" fill="#DBDBDB" />
                                            </svg>


                                        </div>
                                        <div>
                                            <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:fill-black" d="M6.54321 0.890503L1.05615 7.85828" stroke="#44464B" />
                                            </svg>
                                        </div>
                                        <p className="font-normal text-sm text-white dark:text-black iceland">50K</p>
                                    </div>

                                    <div className="border-[#FFFFFF] dark:border-black flex gap-2 lg:gap-3 border-[0.5px] items-center p-2 rounded-[10px] border-opacity-30">
                                        <div>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M18.4313 9.37433C18.4313 14.3118 14.4287 18.3143 9.49129 18.3143C4.55384 18.3143 0.55127 14.3118 0.55127 9.37433C0.55127 4.4369 4.55384 0.434326 9.49129 0.434326C14.4287 0.434326 18.4313 4.4369 18.4313 9.37433ZM11.0482 5.11963C11.8545 5.25884 12.62 5.50246 13.3387 5.83309H13.3504C14.6066 7.68926 15.226 9.78326 14.9981 12.2021C14.0399 12.9155 13.1049 13.3448 12.1876 13.629C11.9597 13.3216 11.761 12.9909 11.5857 12.6487C11.9129 12.5211 12.2343 12.3703 12.5323 12.1905C12.4505 12.1325 12.3745 12.0745 12.2986 12.0107C10.4931 12.8575 8.51222 12.8575 6.68332 12.0107C6.65616 12.0314 6.629 12.0529 6.60157 12.0746C6.55229 12.1135 6.50215 12.1532 6.44959 12.1905C6.74759 12.3703 7.06312 12.5269 7.39618 12.6487C7.22089 12.9909 7.02222 13.3216 6.79434 13.629C5.87696 13.3448 4.9479 12.9155 3.98377 12.2021C3.79095 10.1197 4.18244 8.00248 5.63155 5.83309C6.35026 5.50246 7.11571 5.25884 7.92207 5.11963C8.0214 5.29364 8.13826 5.53147 8.22007 5.72288C9.05563 5.59527 9.90289 5.59527 10.756 5.72288C10.832 5.53147 10.9488 5.29364 11.0482 5.11963ZM6.64241 9.80066C6.64241 10.4213 7.09234 10.926 7.64159 10.926C8.20254 10.926 8.64077 10.4155 8.64077 9.80066C8.64661 9.18 8.20254 8.67536 7.64159 8.67536C7.08065 8.67536 6.64241 9.18 6.64241 9.80066ZM10.3294 9.80066C10.3294 10.4213 10.7794 10.926 11.3286 10.926C11.8896 10.926 12.3278 10.4155 12.3278 9.80066C12.3336 9.18 11.8896 8.67536 11.3286 8.67536C10.7677 8.67536 10.3294 9.18 10.3294 9.80066Z" fill="white" />
                                            </svg>



                                        </div>
                                        <div>
                                            <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:fill-black" d="M6.54321 0.890503L1.05615 7.85828" stroke="#44464B" />
                                            </svg>
                                        </div>
                                        <p className="font-normal text-sm text-white dark:text-black iceland">50K</p>
                                    </div>

                                    <div className="border-[#FFFFFF] dark:border-black flex gap-2 lg:gap-3 border-[0.5px] items-center p-2 rounded-[10px] border-opacity-30">
                                        <div>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M9.55514 18.0428C14.4931 18.0428 18.496 14.0398 18.496 9.10189C18.496 4.16398 14.4931 0.161011 9.55514 0.161011C4.61723 0.161011 0.614258 4.16398 0.614258 9.10189C0.614258 14.0398 4.61723 18.0428 9.55514 18.0428ZM3.70996 9.13379C3.70996 5.95343 6.28815 3.37524 9.46851 3.37524C12.6489 3.37524 15.2271 5.95343 15.2271 9.13379C15.2271 12.3141 12.6489 14.8923 9.46851 14.8923C6.28815 14.8923 3.70996 12.3141 3.70996 9.13379ZM12.069 6.65941H13.1188C12.9634 6.43119 12.7856 6.21576 12.5861 6.01623C12.2909 5.72102 11.961 5.47311 11.6059 5.2757C11.7918 5.68737 11.9483 6.153 12.069 6.65941ZM13.7331 10.2585C13.8281 9.89583 13.8774 9.51862 13.8774 9.13379C13.8774 8.74896 13.8281 8.37175 13.7331 8.00907H12.2927C12.3287 8.37285 12.3478 8.74884 12.3478 9.13379C12.3478 9.51873 12.3287 9.89473 12.2927 10.2585H13.7331ZM8.63973 12.6021C8.99505 13.3128 9.35154 13.5427 9.46851 13.5427C9.58548 13.5427 9.94197 13.3128 10.2973 12.6021C10.4445 12.3077 10.5708 11.9724 10.6741 11.6082H8.2629C8.36624 11.9724 8.49255 12.3077 8.63973 12.6021ZM7.93889 9.13379C7.93889 9.51554 7.96062 9.89304 8.00217 10.2585H10.9348C10.9764 9.89304 10.9981 9.51554 10.9981 9.13379C10.9981 8.75204 10.9764 8.37454 10.9348 8.00907H8.00217C7.96062 8.37454 7.93889 8.75204 7.93889 9.13379ZM5.2039 8.00907C5.1089 8.37175 5.05962 8.74896 5.05962 9.13379C5.05962 9.51862 5.1089 9.89583 5.2039 10.2585H6.6443C6.60829 9.89473 6.58923 9.51873 6.58923 9.13379C6.58923 8.74884 6.60829 8.37285 6.6443 8.00907H5.2039ZM10.2973 5.66546C9.94197 4.95482 9.58548 4.7249 9.46851 4.7249C9.35154 4.7249 8.99505 4.95482 8.63973 5.66546C8.49252 5.95984 8.36624 6.29519 8.2629 6.65941H10.6741C10.5708 6.29516 10.4445 5.95984 10.2973 5.66546ZM6.86798 6.65941C6.98867 6.15298 7.14518 5.68737 7.33107 5.2757C6.97598 5.47311 6.64617 5.72102 6.35095 6.01623C6.15143 6.21576 5.97365 6.43119 5.81824 6.65941H6.86798ZM6.86798 11.6082H5.81824C5.97363 11.8364 6.15143 12.0518 6.35095 12.2513C6.64614 12.5466 6.97598 12.7945 7.33107 12.9919C7.1452 12.5802 6.98867 12.1146 6.86798 11.6082ZM12.069 11.6082C11.9483 12.1146 11.7918 12.5802 11.6059 12.9919C11.961 12.7945 12.2908 12.5466 12.5861 12.2513C12.7856 12.0518 12.9634 11.8364 13.1188 11.6082H12.069Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col res-justify justify-between">
                            <div className="flex w-full justify-start lg:justify-end">
                                <div className="border-[white] max-w-[300px] dark:border-black flex items-center rounded-[10px] lg:py-3 lg:px-4 px-2 py-3 gap-2 lg:gap-4 border-[1.5px] border-opacity-30">
                                    <p className="font-normal lg:text-xl text-base dark:text-black text-[#CFFA00] whitespace-nowrap iceland">Fair Launch Live</p>
                                    <div>
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.70703 0.62793L1.21997 7.5957" stroke="#44464B" />
                                        </svg>
                                    </div>
                                    <p className="text-white dark:text-black iceland font-normal text-xs whitespace-nowrap lg:text-base">12d : 19h : 40m</p>
                                </div>
                            </div>


                            <div className="flex lg:flex-row flex-col items-start mt-4 lg:items-center gap-3">
                                <div className="flex whitespace-nowrap font-medium lg:text-sm text-xs text-white dark:text-black items-center">
                                    <p>Dec 14th 2023 05:30</p>
                                    <p className="mx-1">-</p>
                                    <p>Dec 14th 2023 05:30</p>
                                </div>
                                <div className='relative'>
                                    <div className='flex sm-boosted items-center whitespace-nowrap  z-20 justify-center bg-[#CFFA00] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                        View Presale
                                    </div>
                                    <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[#EFEFEF]'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:block hidden absolute bottom-right-cut bg-[#191B20] dark:bg-white'>

                    </div>
                </div>

                <div className="relative mt-6 w-full">
                    <div className='lg:block hidden absolute top-left-cut bg-[#191B20] dark:bg-white'>

                    </div>
                    <div className="w-full p-4 md:p-6 lg:p-8 flex lg:flex-row flex-col lg:justify-between items-center rounded-[10px] bg-[#23252A] dark:bg-[#EFEFEF]">
                        <div className="flex lg:flex-row flex-col items-center w-full">
                            <div className="max-w-[92px]">
                                <img src="/Images/chartpp.png"></img>
                            </div>
                            <div className="w-full">
                                <div className="flex  items-center mt-3 lg:mt-0 lg:ml-6 gap-2 lg:gap-3">
                                    <p className="font-semibold  res-3xl-text  text-white dark:text-black">Scorpion Casino</p>
                                    <img src="/Images/scorp.png" className="max-w-[57px] ml-2 lg:ml-5"></img>
                                    <img src="/Images/lightkyc.png" className="max-w-[68px]"></img>
                                    <img src="/Images/lightaudit.png" className="max-w-[61px]"></img>
                                </div>
                                <div className="flex flex-wrap items-center lg:ml-6 gap-2 lg:gap-3 mt-6">

                                    <div className="border-[#FFFFFF] dark:border-black flex gap-2 lg:gap-3 border-[0.5px] items-center p-2 rounded-[10px] border-opacity-30">
                                        <div>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.708984" y="0.532227" width="19.6844" height="19.6844" rx="6" fill="#181818" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7707 11.1733L13.9031 12.3024L10.8249 15.3774L7.74989 12.3024L8.88226 11.1733L10.8249 13.1159L12.7707 11.1733ZM10.8249 9.22749L11.9735 10.3761L10.8249 11.5248L9.67947 10.3794V10.3761L9.88121 10.1744L9.97883 10.0768L10.8249 9.22749ZM6.95268 9.24376L8.08505 10.3761L6.95268 11.5052L5.82031 10.3729L6.95268 9.24376ZM14.697 9.24376L15.8294 10.3761L14.697 11.5052L13.5647 10.3729L14.697 9.24376ZM10.8249 5.37158L13.8998 8.44654L12.7674 9.57891L10.8249 7.63306L8.88226 9.57566L7.74989 8.44654L10.8249 5.37158Z" fill="#F3BA2F" />
                                            </svg>
                                        </div>
                                        <p className="font-normal dark:text-black  text-sm text-white iceland">BSC</p>
                                        <div>
                                            <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.57202 0.890625L1.08496 7.8584" stroke="#44464B" />
                                            </svg>
                                        </div>
                                        <p className="font-normal dark:text-black  text-sm text-white iceland">0x3780...19A7</p>
                                        <div>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:stroke-black" fill-rule="evenodd" clip-rule="evenodd" d="M3.46263 0.782715H6.52418C7.1772 0.786289 7.80215 1.04915 8.26137 1.51348C8.72067 1.97781 8.97665 2.60556 8.9731 3.25864V6.26617C8.97665 6.91919 8.72067 7.54699 8.26137 8.01133C7.80215 8.4756 7.1772 8.73847 6.52418 8.7421H3.46263C2.80956 8.73847 2.18465 8.4756 1.72539 8.01133C1.26612 7.54699 1.01012 6.91919 1.01371 6.26617V3.25935C1.00993 2.60615 1.26585 1.97822 1.72513 1.51373C2.18441 1.04925 2.80943 0.786289 3.46263 0.782715Z" stroke="#CFFA00" stroke-linecap="round" stroke-linejoin="round" />
                                                <path className="dark:stroke-black" d="M4.33008 10.7319H7.71991C9.53109 10.7112 10.9827 9.22644 10.9626 7.41526V4.09863" stroke="#CFFA00" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </div>

                                    </div>
                                    <div className="border-[#FFFFFF] dark:border-black flex gap-2 lg:gap-3 border-[0.5px] items-center p-2 rounded-[10px] border-opacity-30">
                                        <div>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M18.0302 9.37448C18.0302 14.3124 14.0272 18.3154 9.08932 18.3154C4.15141 18.3154 0.148438 14.3124 0.148438 9.37448C0.148438 4.43656 4.15141 0.433594 9.08932 0.433594C14.0272 0.433594 18.0302 4.43656 18.0302 9.37448ZM9.40972 7.03415C8.54009 7.39586 6.80205 8.14451 4.1956 9.28009C3.77235 9.4484 3.55063 9.61306 3.53045 9.77406C3.49634 10.0462 3.83708 10.1533 4.30108 10.2992C4.3642 10.319 4.4296 10.3396 4.49664 10.3614C4.95315 10.5098 5.56723 10.6834 5.88646 10.6903C6.17604 10.6966 6.49924 10.5772 6.85607 10.3321C9.29135 8.68826 10.5485 7.85737 10.6274 7.83945C10.6831 7.82681 10.7602 7.81092 10.8125 7.85739C10.8648 7.90386 10.8596 7.99186 10.8541 8.01546C10.8203 8.15937 9.48281 9.40286 8.79064 10.0464C8.57485 10.247 8.42179 10.3893 8.3905 10.4218C8.32041 10.4946 8.24897 10.5634 8.18032 10.6296C7.75621 11.0385 7.43817 11.3451 8.19792 11.8457C8.56303 12.0863 8.85519 12.2853 9.14666 12.4838C9.46497 12.7005 9.78245 12.9168 10.1932 13.186C10.2979 13.2546 10.3978 13.3259 10.4952 13.3953C10.8656 13.6594 11.1984 13.8966 11.6096 13.8588C11.8485 13.8368 12.0953 13.6122 12.2206 12.9422C12.5168 11.3587 13.099 7.92788 13.2336 6.51412C13.2454 6.39026 13.2305 6.23173 13.2186 6.16215C13.2067 6.09256 13.1818 5.99341 13.0914 5.92002C12.9843 5.83309 12.8189 5.81476 12.7449 5.81607C12.4086 5.82199 11.8927 6.00139 9.40972 7.03415Z" fill="#DBDBDB" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:fill-black" d="M6.54321 0.890503L1.05615 7.85828" stroke="#44464B" />
                                            </svg>
                                        </div>
                                        <p className="font-normal text-sm text-white dark:text-black iceland">50K</p>
                                    </div>

                                    <div className="border-[#FFFFFF] dark:border-black flex gap-2 lg:gap-3 border-[0.5px] items-center p-2 rounded-[10px] border-opacity-30">
                                        <div>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M9.26179 18.3144C14.1992 18.3144 18.2018 14.3119 18.2018 9.37445C18.2018 4.43702 14.1992 0.434448 9.26179 0.434448C4.32435 0.434448 0.321777 4.43702 0.321777 9.37445C0.321777 14.3119 4.32435 18.3144 9.26179 18.3144ZM13.5065 5.24828H12.0302L9.59752 7.88521L7.49417 5.24828H4.44782L8.0877 9.76166L4.63793 13.5006H6.11515L8.77767 10.6157L11.1046 13.5006H14.0755L10.2812 8.74388L13.5065 5.24828ZM12.3301 12.6627H11.5121L6.17181 6.0422H7.04967L12.3301 12.6627Z" fill="#DBDBDB" />
                                            </svg>


                                        </div>
                                        <div>
                                            <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:fill-black" d="M6.54321 0.890503L1.05615 7.85828" stroke="#44464B" />
                                            </svg>
                                        </div>
                                        <p className="font-normal text-sm text-white dark:text-black iceland">50K</p>
                                    </div>

                                    <div className="border-[#FFFFFF] dark:border-black flex gap-2 lg:gap-3 border-[0.5px] items-center p-2 rounded-[10px] border-opacity-30">
                                        <div>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M18.4313 9.37433C18.4313 14.3118 14.4287 18.3143 9.49129 18.3143C4.55384 18.3143 0.55127 14.3118 0.55127 9.37433C0.55127 4.4369 4.55384 0.434326 9.49129 0.434326C14.4287 0.434326 18.4313 4.4369 18.4313 9.37433ZM11.0482 5.11963C11.8545 5.25884 12.62 5.50246 13.3387 5.83309H13.3504C14.6066 7.68926 15.226 9.78326 14.9981 12.2021C14.0399 12.9155 13.1049 13.3448 12.1876 13.629C11.9597 13.3216 11.761 12.9909 11.5857 12.6487C11.9129 12.5211 12.2343 12.3703 12.5323 12.1905C12.4505 12.1325 12.3745 12.0745 12.2986 12.0107C10.4931 12.8575 8.51222 12.8575 6.68332 12.0107C6.65616 12.0314 6.629 12.0529 6.60157 12.0746C6.55229 12.1135 6.50215 12.1532 6.44959 12.1905C6.74759 12.3703 7.06312 12.5269 7.39618 12.6487C7.22089 12.9909 7.02222 13.3216 6.79434 13.629C5.87696 13.3448 4.9479 12.9155 3.98377 12.2021C3.79095 10.1197 4.18244 8.00248 5.63155 5.83309C6.35026 5.50246 7.11571 5.25884 7.92207 5.11963C8.0214 5.29364 8.13826 5.53147 8.22007 5.72288C9.05563 5.59527 9.90289 5.59527 10.756 5.72288C10.832 5.53147 10.9488 5.29364 11.0482 5.11963ZM6.64241 9.80066C6.64241 10.4213 7.09234 10.926 7.64159 10.926C8.20254 10.926 8.64077 10.4155 8.64077 9.80066C8.64661 9.18 8.20254 8.67536 7.64159 8.67536C7.08065 8.67536 6.64241 9.18 6.64241 9.80066ZM10.3294 9.80066C10.3294 10.4213 10.7794 10.926 11.3286 10.926C11.8896 10.926 12.3278 10.4155 12.3278 9.80066C12.3336 9.18 11.8896 8.67536 11.3286 8.67536C10.7677 8.67536 10.3294 9.18 10.3294 9.80066Z" fill="white" />
                                            </svg>



                                        </div>
                                        <div>
                                            <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:fill-black" d="M6.54321 0.890503L1.05615 7.85828" stroke="#44464B" />
                                            </svg>
                                        </div>
                                        <p className="font-normal text-sm text-white dark:text-black iceland">50K</p>
                                    </div>

                                    <div className="border-[#FFFFFF] dark:border-black flex gap-2 lg:gap-3 border-[0.5px] items-center p-2 rounded-[10px] border-opacity-30">
                                        <div>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="dark:fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M9.55514 18.0428C14.4931 18.0428 18.496 14.0398 18.496 9.10189C18.496 4.16398 14.4931 0.161011 9.55514 0.161011C4.61723 0.161011 0.614258 4.16398 0.614258 9.10189C0.614258 14.0398 4.61723 18.0428 9.55514 18.0428ZM3.70996 9.13379C3.70996 5.95343 6.28815 3.37524 9.46851 3.37524C12.6489 3.37524 15.2271 5.95343 15.2271 9.13379C15.2271 12.3141 12.6489 14.8923 9.46851 14.8923C6.28815 14.8923 3.70996 12.3141 3.70996 9.13379ZM12.069 6.65941H13.1188C12.9634 6.43119 12.7856 6.21576 12.5861 6.01623C12.2909 5.72102 11.961 5.47311 11.6059 5.2757C11.7918 5.68737 11.9483 6.153 12.069 6.65941ZM13.7331 10.2585C13.8281 9.89583 13.8774 9.51862 13.8774 9.13379C13.8774 8.74896 13.8281 8.37175 13.7331 8.00907H12.2927C12.3287 8.37285 12.3478 8.74884 12.3478 9.13379C12.3478 9.51873 12.3287 9.89473 12.2927 10.2585H13.7331ZM8.63973 12.6021C8.99505 13.3128 9.35154 13.5427 9.46851 13.5427C9.58548 13.5427 9.94197 13.3128 10.2973 12.6021C10.4445 12.3077 10.5708 11.9724 10.6741 11.6082H8.2629C8.36624 11.9724 8.49255 12.3077 8.63973 12.6021ZM7.93889 9.13379C7.93889 9.51554 7.96062 9.89304 8.00217 10.2585H10.9348C10.9764 9.89304 10.9981 9.51554 10.9981 9.13379C10.9981 8.75204 10.9764 8.37454 10.9348 8.00907H8.00217C7.96062 8.37454 7.93889 8.75204 7.93889 9.13379ZM5.2039 8.00907C5.1089 8.37175 5.05962 8.74896 5.05962 9.13379C5.05962 9.51862 5.1089 9.89583 5.2039 10.2585H6.6443C6.60829 9.89473 6.58923 9.51873 6.58923 9.13379C6.58923 8.74884 6.60829 8.37285 6.6443 8.00907H5.2039ZM10.2973 5.66546C9.94197 4.95482 9.58548 4.7249 9.46851 4.7249C9.35154 4.7249 8.99505 4.95482 8.63973 5.66546C8.49252 5.95984 8.36624 6.29519 8.2629 6.65941H10.6741C10.5708 6.29516 10.4445 5.95984 10.2973 5.66546ZM6.86798 6.65941C6.98867 6.15298 7.14518 5.68737 7.33107 5.2757C6.97598 5.47311 6.64617 5.72102 6.35095 6.01623C6.15143 6.21576 5.97365 6.43119 5.81824 6.65941H6.86798ZM6.86798 11.6082H5.81824C5.97363 11.8364 6.15143 12.0518 6.35095 12.2513C6.64614 12.5466 6.97598 12.7945 7.33107 12.9919C7.1452 12.5802 6.98867 12.1146 6.86798 11.6082ZM12.069 11.6082C11.9483 12.1146 11.7918 12.5802 11.6059 12.9919C11.961 12.7945 12.2908 12.5466 12.5861 12.2513C12.7856 12.0518 12.9634 11.8364 13.1188 11.6082H12.069Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col res-justify justify-between">
                            <div className="flex w-full justify-start lg:justify-end">
                                <div className="border-[white] max-w-[300px] dark:border-black flex items-center rounded-[10px] lg:py-3 lg:px-4 px-2 py-3 gap-2 lg:gap-4 border-[1.5px] border-opacity-30">
                                    <p className="font-normal lg:text-xl text-base dark:text-black text-[#DBDBDB] whitespace-nowrap iceland">Price</p>

                                    <p className="text-white dark:text-black iceland font-normal text-xs whitespace-nowrap ml-6 lg:text-3xl">0.00 $</p>
                                </div>
                            </div>


                            <div className="flex lg:flex-row flex-col items-start mt-4 lg:items-center gap-3">
                                <div className="flex gap-2 whitespace-nowrap font-medium lg:text-sm text-xs text-white dark:text-black items-center">
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_39_3993)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33986 3.17627C3.0875 1.79502 4.09696 0.52002 5.40926 0.52002C6.57015 0.52002 7.52914 1.52939 7.52914 2.75127V5.51377C7.83198 5.51377 8.13481 5.46064 8.43765 5.46064C8.74049 5.46064 8.99286 5.46064 9.2957 5.51377V2.75127C9.2957 1.52939 10.2547 0.52002 11.4156 0.52002C12.7279 0.52002 13.7373 1.79502 13.5354 3.17627L12.9802 6.41689C14.9487 7.32002 16.4629 8.91377 16.4629 10.8794V12.1013C16.4629 13.7481 15.4534 15.1294 13.9897 16.0325C12.526 16.9888 10.608 17.52 8.43765 17.52C6.26731 17.52 4.34933 16.9888 2.8856 16.0325C1.47235 15.1294 0.462891 13.7481 0.462891 12.1013V10.8794C0.462891 8.91377 1.92661 7.32002 3.89507 6.41689L3.33986 3.17627ZM12.2231 6.84189L12.8793 3.01689C13.0307 2.06064 12.3746 1.15752 11.4156 1.15752C10.608 1.15752 9.95185 1.84814 9.95185 2.69814V6.20439C9.74996 6.15127 9.49759 6.15127 9.2957 6.15127C8.99286 6.15127 8.74049 6.09814 8.43765 6.09814C8.13481 6.09814 7.83198 6.09814 7.52914 6.15127C7.32724 6.15127 7.07488 6.20439 6.87298 6.20439V2.75127C6.87298 1.90127 6.21683 1.21064 5.40926 1.21064C4.50075 1.21064 3.79412 2.11377 3.99601 3.07002L4.65216 6.89502C2.53229 7.74502 1.11904 9.23252 1.11904 10.9325V12.1544C1.11904 14.7575 4.3998 16.8825 8.43765 16.8825C12.4755 16.8825 15.7563 14.7575 15.7563 12.1544V10.9325C15.8067 9.17939 14.3935 7.69189 12.2231 6.84189Z" fill="#633001" />
                                            <path d="M15.8067 12.1013C15.8067 14.7044 12.526 16.8294 8.48814 16.8294C4.45028 16.8294 1.16953 14.7044 1.16953 12.1013V10.8794H15.8572V12.1013H15.8067Z" fill="#FEDC90" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99602 3.06982C3.79413 2.11357 4.50076 1.21045 5.40927 1.21045C6.21684 1.21045 6.87299 1.90107 6.87299 2.75107V6.25732C7.37773 6.2042 7.88246 6.15107 8.43766 6.15107C8.9424 6.15107 9.44713 6.2042 9.95186 6.25732V2.75107C9.95186 1.90107 10.608 1.21045 11.4156 1.21045C12.3241 1.21045 13.0307 2.11357 12.8793 3.06982L12.2232 6.89482C14.343 7.74482 15.8067 9.23232 15.8067 10.9323C15.8067 13.5354 12.526 15.6604 8.48814 15.6604C4.45028 15.6604 1.16953 13.5354 1.16953 10.9323C1.16953 9.23232 2.58277 7.74482 4.70265 6.89482L3.99602 3.06982Z" fill="#D1884F" />
                                            <path d="M6.41873 10.5606C6.41873 11.2513 6.06542 11.8356 5.61116 11.8356C5.1569 11.8356 4.80359 11.2513 4.80359 10.5606C4.80359 9.87002 5.1569 9.28564 5.61116 9.28564C6.06542 9.28564 6.41873 9.87002 6.41873 10.5606Z" fill="#633001" />
                                            <path d="M12.0212 10.5606C12.0212 11.2513 11.6679 11.8356 11.2137 11.8356C10.7594 11.8356 10.4061 11.2513 10.4061 10.5606C10.4061 9.87002 10.7594 9.28564 11.2137 9.28564C11.6679 9.28564 12.0212 9.87002 12.0212 10.5606Z" fill="#633001" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_39_3993">
                                                <rect width="16" height="17" fill="white" transform="translate(0.462891 0.52002)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className='font-bold text-sm  dark:text-[#313131] text-[#DBDBDB]'>Pancakeswap</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-[#CFFA00] dark:text-black font-normal text-base'>Charts</p>
                                    <div>
                                        <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className='dark:fill-black' d="M3.80261 4.94653L6.92324 0.801228H0.681982L3.80261 4.94653Z" fill="#CFFA00" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:block hidden absolute bottom-right-cut bg-[#191B20] dark:bg-white'>

                    </div>
                </div>

                <div className="w-full lg:flex-row flex-col gap-5 mt-5 flex ">
                    <div className="lg:w-[70%] lg:py-6 lg:px-8 px-6 py-4 rounded-[10px] bg-[#23252A] dark:bg-[#EFEFEF] w-full">
                        <div className="w-full">
                            <p className="iceland font-normal text-2xl text-white dark:text-black ">Description</p>
                        </div>
                        <div className="my-4">
                            <p className="font-semibold text-sm text-[#DBDBDB] opacity-50 dark:text-[#313131]">SCORPION is the Future Leading Crypto Gambling Platform. Providing more than 30‘000 bet opportunities monthly, 210 casino games, and 160 live games. Scorpion is licensed and powered by Betradar and Coinspaid.SCORPION is the Future Leading Crypto Gambling Platform. Providing more than 30‘000 bet opportunities monthly, 210 casino games, and 160 live games. Scorpion is licensed and powered by Betradar and Coinspaid.</p>
                        </div>
                    </div>

                    <div className="lg:w-[30%] rounded-[10px] px-4 py-4 gap-4 flex flex-col lg:px-8 lg:py-4 bg-[#23252A] dark:bg-[#EFEFEF] w-full">
                        <div className="bg-[#191B21] dark:bg-white rounded-[10px] h-1/2 flex justify-between px-4 lg:px-6 items-center">
                            <div className="flex flex-col text-center">
                                <p className="iceland font-normal text-sm text-white dark:text-black opacity-50">Total Boosts</p>
                                <p className="iceland font-normal text-xl text-white dark:text-black">731</p>
                            </div>
                            <div className="flex flex-col text-center">
                                <p className="iceland font-normal text-sm text-white dark:text-black opacity-50">Today</p>
                                <div className="flex items-center gap-1">
                                    <div>
                                        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.90759 0.685547L7.02822 4.83085H0.786963L3.90759 0.685547Z" fill="#5AEFDF" />
                                        </svg>

                                    </div>
                                    <p className="iceland text-[#5AEFDF] font-normal text-xl  dark:text-black">2</p>
                                </div>
                            </div>
                            <div className='relative'>
                                <div className='flex sm-boosted items-center  z-20 justify-center bg-[#5AEFDF] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                    Vote
                                </div>
                                <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

                                </div>
                            </div>
                        </div>

                        <div className="bg-[#191B21]  dark:bg-white rounded-[10px] h-1/2 flex justify-between px-4 lg:px-6 items-center">
                            <div className="flex flex-col text-center">
                                <p className="iceland font-normal text-sm text-white dark:text-black opacity-50">Total Boosts</p>
                                <p className="iceland font-normal text-xl text-white dark:text-black">3</p>
                            </div>
                            <div className="flex flex-col text-center">
                                <p className="iceland font-normal text-sm text-white dark:text-black opacity-50">Today</p>
                                <div className="flex items-center gap-1">
                                    <div>
                                        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.90759 0.0212402L7.02822 4.16655H0.786963L3.90759 0.0212402Z" fill="#CFFA00" />
                                        </svg>
                                    </div>
                                    <p className="iceland font-normal text-xl text-[#CFFA00] ">2</p>
                                </div>
                            </div>
                            <div className='relative'>
                                <div className='flex sm-boosted items-center  z-20 justify-center bg-[#CFFA00] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                    Boost
                                </div>
                                <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[white]'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:flex-row res-market-data-flex flex-col gap-5 mt-5 flex">
                    {/* market data */}
                    <div className="lg:w-[45%] res-market-width lg:px-8 bg-[#23252A] rounded-[10px] dark:bg-[#EFEFEF] lg:py-6 p-4 w-full">
                        <div className="w-full flex justify-start">
                            <p className="font-normal text-2xl iceland text-white dark:text-black">Market Data</p>
                        </div>
                        <div className="flex md:flex-row flex-col items-start md:justify-between mt-4 lg:items-center">
                            <div className="flex  items-center gap-3">
                                <p className="font-normal text-xs whitespace-nowrap text-white opacity-50 dark:text-black">Price</p>
                                <p className="font-normal lg:text-xl text-white mb-1  dark:text-black">$-</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-normal text-xs whitespace-nowrap text-white opacity-50 dark:text-black">Price Change (245)</p>
                                <p className="font-normal lg:text-xl text-[yellow] mb-1  dark:text-black">$-</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-normal text-xs whitespace-nowrap text-white opacity-50 dark:text-black">Marketcap</p>
                                <p className="font-normal lg:text-xl text-white mb-1  dark:text-black">$-</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-normal text-xs whitespace-nowrap text-white opacity-50 dark:text-black">Total Liquidity</p>
                                <p className="font-normal lg:text-xl text-white mb-1  dark:text-black">$-</p>
                            </div>
                        </div>
                    </div>

                    {/* summery */}
                    <div className="lg:w-[55%] res-market-width lg:px-8 bg-[#23252A] dark:bg-[#EFEFEF] lg:py-4 p-4 w-full">
                        <div className="w-full flex justify-start">
                            <p className="font-normal text-2xl iceland text-white dark:text-black">Summary</p>
                        </div>
                        <div className="flex md:flex-row flex-col items-start md:justify-between mt-4 lg:items-center">
                            <div className="flex  items-center gap-3">
                                <p className="font-normal text-xs whitespace-nowrap text-white opacity-50 dark:text-black">Launch Date</p>
                                <p className="font-normal lg:text-lg text-white mb-1  dark:text-black">TBA</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-normal text-xs whitespace-nowrap text-white opacity-50 dark:text-black">Submitted</p>
                                <p className="font-normal lg:text-lg text-white mb-1 whitespace-nowrap dark:text-black">December 5th 2022</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-normal text-xs whitespace-nowrap text-white opacity-50 dark:text-black">On Watchlists</p>
                                <p className="font-normal lg:text-lg text-white mb-1  dark:text-black">36</p>
                            </div>
                            <div className="flex items-center mt-4 md:mt-0 gap-3">
                                {/* <p className="font-normal text-xs whitespace-nowrap text-white opacity-50 dark:text-black">Total Liquidity</p>
                                <p className="font-normal lg:text-lg text-white mb-1  dark:text-black">$-</p> */}
                                <div className='relative'>
                                    <div className='flex sm-boosted items-center whitespace-nowrap z-20 justify-center bg-[#CFFA00] rounded-[10px] py-2 px-4 font-bold res-text-sm  text-sm text-black'>
                                        Add to Watchlist
                                    </div>
                                    <div className='absolute -bottom-1 -right-1 h-[15px] z-50 boost-clip w-[15px] bg-[#191b20] dark:bg-[#EFEFEF]'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-5 mt-5 w-full lg:flex-row flex-col'>
                    {/* left side */}
                    <div className='lg:w-[65%]  w-full'>

                        {/* tokenomics */}
                        <div className='bg-[#23252A] dark:bg-[#EFEFEF] lg:px-8 lg:py-6  p-4 rounded-[10px]'>
                            <div className="w-full flex justify-start">
                                <p className="font-normal text-2xl iceland text-white dark:text-black">Tokenomics</p>
                            </div>
                            <div className='mt-10 flex lg:flex-row flex-col gap-3 items-start justify-between w-full'>
                                <div className='flex justify-center lg:justify-start full-width'>
                                    <img src='/Images/cropchart.png'></img>
                                </div>
                                <div className='mt-8 flex flex-col gap-4'>
                                    <div className="flex font-normal text-xl iceland text-white dark:text-black gap-3 items-center">
                                        <div className='flex gap-3 items-center'>
                                            <div className='flex items-center'>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.963867" y="0.444824" width="20" height="20" rx="5" fill="#CFFA00" />
                                                </svg>
                                            </div>

                                            <div className='flex mt-1 items-center'>
                                                <p>40%</p>
                                            </div>
                                        </div>
                                        <div className='mt-1 text-base'>
                                            <p className=''>Presale</p>
                                        </div>
                                    </div>

                                    <div className="flex font-normal text-xl iceland text-white dark:text-black gap-3 items-center">
                                        <div className='flex gap-3 items-center'>
                                            <div className='flex items-center'>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.963867" y="0.444824" width="20" height="20" rx="5" fill="#14DF67" />
                                                </svg>
                                            </div>

                                            <div className='flex mt-1 items-center'>
                                                <p>15%</p>
                                            </div>
                                        </div>
                                        <div className='mt-1 text-base'>
                                            <p className=''>Marketing</p>
                                        </div>
                                    </div>

                                    <div className="flex font-normal text-xl iceland text-white dark:text-black gap-3 items-center">
                                        <div className='flex gap-3 items-center'>
                                            <div className='flex items-center'>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.963867" y="0.444824" width="20" height="20" rx="5" fill="#B4671F" />
                                                </svg>
                                            </div>

                                            <div className='flex mt-1 items-center'>
                                                <p>15%</p>
                                            </div>
                                        </div>
                                        <div className='mt-1 text-base'>
                                            <p className=''>Presale Bonus</p>
                                        </div>
                                    </div>

                                    <div className="flex font-normal text-xl iceland text-white dark:text-black gap-3 items-center">
                                        <div className='flex gap-3 items-center'>
                                            <div className='flex items-center'>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.963867" y="0.444824" width="20" height="20" rx="5" fill="#76FFCE" />
                                                </svg>
                                            </div>

                                            <div className='flex mt-1 items-center'>
                                                <p>10%</p>
                                            </div>
                                        </div>
                                        <div className='mt-1 text-base'>
                                            <p className=''>Liquidity Pool</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-8 flex flex-col gap-4'>
                                    <div className="flex font-normal text-xl iceland text-white dark:text-black gap-3 items-center">
                                        <div className='flex gap-3 items-center'>
                                            <div className='flex items-center'>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.461914" y="0.444824" width="20" height="20" rx="5" fill="#49B3FF" />
                                                </svg>

                                            </div>

                                            <div className='flex mt-1 items-center'>
                                                <p>10%</p>
                                            </div>
                                        </div>
                                        <div className='mt-1 text-base'>
                                            <p className=''>Staking Rewards</p>
                                        </div>
                                    </div>

                                    <div className="flex font-normal text-xl iceland text-white dark:text-black gap-3 items-center">
                                        <div className='flex gap-3 items-center'>
                                            <div className='flex items-center'>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.461914" y="0.444824" width="20" height="20" rx="5" fill="#2361AA" />
                                                </svg>
                                            </div>

                                            <div className='flex mt-1 items-center'>
                                                <p>10%</p>
                                            </div>
                                        </div>
                                        <div className='mt-1 text-base'>
                                            <p className=''>Team & Advisors</p>
                                        </div>
                                    </div>

                                    <div className="flex font-normal text-xl iceland text-white dark:text-black gap-3 items-center">
                                        <div className='flex gap-3 items-center'>
                                            <div className='flex items-center'>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.461914" y="0.444824" width="20" height="20" rx="5" fill="#2361AA" />
                                                </svg>
                                            </div>

                                            <div className='flex mt-1 items-center'>
                                                <p>05%</p>
                                            </div>
                                        </div>
                                        <div className='mt-1 text-base'>
                                            <p className=''>Airdrop & Referrals</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* roadmap */}
                        <div className='bg-[#23252A] lg:pb-16 mt-5 dark:bg-[#EFEFEF] lg:px-8 lg:pt-6  p-4 rounded-[10px]'>
                            <div className="w-full flex justify-start">
                                <p className="font-normal text-2xl iceland text-white dark:text-black">Roadmap (Locked)</p>
                            </div>
                            <div className='mt-8 flex items-center w-full'>
                                <div>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle className='dark:fill-[#EFEFEF]' cx="10.7256" cy="10.4126" r="8.79785" fill="#23252A" stroke="#CFFA00" stroke-width="2" />
                                    </svg>
                                </div>
                                <div className='flex w-1/2 items-center'>
                                    <div className='w-full h-[2px] bg-[#CFFA00]'>

                                    </div>
                                </div>
                                <div>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle className='dark:fill-[#EFEFEF]' cx="10.7256" cy="10.4126" r="8.79785" fill="#23252A" stroke="#CFFA00" stroke-width="2" />
                                    </svg>
                                </div>
                                <div className='flex w-1/2 items-center'>
                                    <div className='w-full h-[2px] bg-[#CFFA00]'>

                                    </div>
                                </div>
                                <div>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle className='dark:fill-[#EFEFEF]' cx="10.7256" cy="10.4126" r="8.79785" fill="#23252A" stroke="#CFFA00" stroke-width="2" />
                                    </svg>
                                </div>
                            </div>
                            <div className='w-full mt-4 flex items-center justify-between'>
                                <div className='text-left'>
                                    <p className='text-[#DBDBDB] font-semibold text-xs lg:text-base dark:text-black'>Phase 1 - Presale</p>
                                    <p className='text-[#DBDBDB] font-semibold text-xs lg:text-sm dark:text-black opacity-50'>Info not submitted</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-[#DBDBDB] font-semibold text-xs lg:text-base dark:text-black'>Phase 2 - Development</p>
                                    <p className='text-[#DBDBDB] font-semibold text-xs lg:text-sm dark:text-black opacity-50'>Info not submitted</p>
                                </div>
                                <div className='text-right'>
                                    <p className='text-[#DBDBDB] font-semibold text-xs lg:text-base dark:text-black'>Phase 3 - Launch</p>
                                    <p className='text-[#DBDBDB] font-semibold text-xs lg:text-sm dark:text-black opacity-50'>Info not submitted</p>
                                </div>

                            </div>
                        </div>

                        {/* faq */}
                        <div className='bg-[#23252A] mt-5 dark:bg-[#EFEFEF] lg:px-8 lg:py-6  p-4 rounded-[10px]'>
                            <div className="w-full flex justify-start">
                                <p className="font-normal text-2xl iceland text-white dark:text-black">FAQ about SCORP </p>
                            </div>
                            <div className='mt-5'>
                                <div class="space-y-2">
                                    <div
                                        class="group border-b border-[#FFFFFF1A] dark:border-[#0000001A]  flex flex-col gap-2 rounded-lg bg-[#23252A] dark:bg-[#EFEFEF] py-3 text-white"
                                        tabindex="1"
                                    >
                                        <div class="flex cursor-pointer items-center justify-between">
                                            <span className='font-semibold text-base text-[#DBDBDB] dark:text-black'> What are the most important links for SCORPION CASINO? </span>
                                            <div class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180">
                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className='dark:fill-black' d="M4.80725 6.35144L9.33242 0.340404H0.282078L4.80725 6.35144Z" fill="#D9D9D9" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="invisible h-auto max-h-0 font-semibold text-base text-[#DBDBDB] dark:text-black items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </div>
                                    </div>

                                    <div
                                        class="group border-b border-[#FFFFFF1A] dark:border-[#0000001A]  flex flex-col gap-2 rounded-lg bg-[#23252A] dark:bg-[#EFEFEF] py-3 text-white"
                                        tabindex="2"
                                    >
                                        <div class="flex cursor-pointer items-center justify-between">
                                            <span className='font-semibold text-base text-[#DBDBDB] dark:text-black'> What is the contract address of SCORPION CASINO? </span>
                                            <div class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180">
                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className='dark:fill-black' d="M4.80725 6.35144L9.33242 0.340404H0.282078L4.80725 6.35144Z" fill="#D9D9D9" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="invisible h-auto max-h-0 font-semibold text-base text-[#DBDBDB] dark:text-black items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </div>
                                    </div>

                                    <div
                                        class="border-b border-[#FFFFFF1A] dark:border-[#0000001A]  flex flex-col gap-2 rounded-lg bg-[#23252A] dark:bg-[#EFEFEF] py-3 text-white group"
                                        tabindex="3"
                                    >
                                        <div class="flex cursor-pointer items-center justify-between">
                                            <span className='font-semibold text-base text-[#DBDBDB] dark:text-black'> How and where do I buy SCORPION CASINO? </span>
                                            {/* <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                                class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                            /> */}
                                            <div class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180">
                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className='dark:fill-black' d="M4.80725 6.35144L9.33242 0.340404H0.282078L4.80725 6.35144Z" fill="#D9D9D9" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="invisible h-auto max-h-0 font-semibold text-base text-[#DBDBDB] dark:text-black items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </div>
                                    </div>
                                    <div
                                        class="border-b border-[#FFFFFF1A] dark:border-[#0000001A]  flex flex-col gap-2 rounded-lg bg-[#23252A] dark:bg-[#EFEFEF] py-3 text-white group"
                                        tabindex="4"
                                    >
                                        <div class="flex cursor-pointer items-center justify-between">
                                            <span className='font-semibold text-base text-[#DBDBDB] dark:text-black'> Does SCORPION CASINO has an audit? </span>
                                            {/* <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                                class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                            /> */}
                                            <div class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180">
                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className='dark:fill-black' d="M4.80725 6.35144L9.33242 0.340404H0.282078L4.80725 6.35144Z" fill="#D9D9D9" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="invisible h-auto max-h-0 font-semibold text-base text-[#DBDBDB] dark:text-black items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </div>
                                    </div>
                                    <div
                                        class="border-b border-[#FFFFFF1A] dark:border-[#0000001A]  flex flex-col gap-2 rounded-lg bg-[#23252A] dark:bg-[#EFEFEF] py-3 text-white group"
                                        tabindex="5"
                                    >
                                        <div class="flex cursor-pointer items-center justify-between">
                                            <span className='font-semibold text-base text-[#DBDBDB] dark:text-black'> Does SCORPION CASINO has a KYC certificate? </span>
                                            {/* <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                                class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                            /> */}
                                            <div class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180">
                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className='dark:fill-black' d="M4.80725 6.35144L9.33242 0.340404H0.282078L4.80725 6.35144Z" fill="#D9D9D9" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="invisible h-auto max-h-0 font-semibold text-base text-[#DBDBDB] dark:text-black items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                    {/* right side */}
                    <div className='lg:w-[45%]  w-full '>

                        {/* not verified kyc */}
                        <div className='lg:px-8 lg:py-6 p-4 rounded-[10px] bg-[#23252A] dark:bg-[#EFEFEF]'>
                            <div className="w-full flex justify-start">
                                <p className="font-normal text-2xl iceland text-white dark:text-black">KYC & Audit</p>
                            </div>

                            <div className='flex pb-4 border-b border-[#FFFFFF1A] dark:border-[#0000001A]  w-full mt-4 justify-between'>
                                <div>
                                    <p className='font-bold text-base  text-white dark:text-black'>KYC</p>
                                </div>

                                <div className='text-right'>
                                    <p className='font-medium text-base  text-white dark:text-black'>Not KYC Verified</p>
                                    <p className='text-[#CFFA00] dark:text-[#B9DB16] font-medium text-base '>Incorrect? Submit now</p>
                                </div>
                            </div>

                            <div className='flex pb-4  w-full mt-4 justify-between'>
                                <div>
                                    <p className='font-bold text-base  text-white dark:text-black'>Audit</p>
                                </div>

                                <div className='text-right'>
                                    <p className='font-medium text-base  text-white dark:text-black'>Not KYC Verified</p>
                                    <p className='text-[#CFFA00] dark:text-[#B9DB16] font-medium text-base '>Incorrect? Submit now</p>
                                </div>
                            </div>

                        </div>

                        {/* kyc verified */}
                        <div className='lg:px-8 mt-4 lg:py-6 p-4 rounded-[10px] bg-[#23252A] dark:bg-[#EFEFEF]'>
                            <div className="w-full flex justify-start">
                                <p className="font-normal text-2xl iceland text-white dark:text-black">KYC & Audit</p>
                            </div>
                            <div className='mt-4'>
                                <p className='font-bold text-base  text-white dark:text-black'>KYC</p>
                                <p className='font-medium text-sm  text-[#DBDBDB] opacity-50 mt-2 dark:text-[#313131]'>The following checks are incorporated in the KYC process of AssureDefi</p>
                            </div>

                            <div className='bg-[#1D2025] dark:bg-white px-6 py-8 mt-4 rounded-[10px]'>
                                <div className='relative'>
                                    <div className='path w-full rounded-[10px] bg-[#FFFFFF33]'>
                                        <div className='w-[90%] rounded-[10px] h-[3px] bg-[#CFFA00]'>

                                        </div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='font-bold text-sm text-[#CFFA00] mt-1'>90</p>
                                        <p className='text-[#646464] font-bold text-sm mt-1'>100</p>
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <p className='text-[#DBDBDB] font-bold text-sm opacity-50 dark:text-[#424242]'>Checks</p>

                                    <div className='flex mt-4 items-center justify-start gap-3'>
                                        <div>
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.88989" cy="7.36414" r="7.17163" fill="#CFFA00" />
                                                <path d="M4.58899 7.01105L6.94602 9.18672L11.1908 4.59558" stroke="black" stroke-width="1.5" />
                                            </svg>
                                        </div>
                                        <p className='font-medium text-sm text-[#DBDBDB] dark:text-[#424242]'>ID Check</p>
                                    </div>
                                    <div className='flex mt-4 items-center justify-start gap-3'>
                                        <div>
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle opacity="0.3" cx="7.88989" cy="7.54187" r="7.17163" fill="white" />
                                                <path d="M4.58899 7.18878L6.94602 9.36445L11.1908 4.77332" stroke="black" stroke-width="1.5" />
                                            </svg>

                                        </div>
                                        <p className='font-medium text-sm opacity-50 text-[#DBDBDB] dark:text-[#424242]'>All Founders ID Check</p>
                                    </div>
                                    <div className='flex mt-4 items-center justify-start gap-3'>
                                        <div>
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.88989" cy="7.36414" r="7.17163" fill="#CFFA00" />
                                                <path d="M4.58899 7.01105L6.94602 9.18672L11.1908 4.59558" stroke="black" stroke-width="1.5" />
                                            </svg>
                                        </div>
                                        <p className='font-medium text-sm text-[#DBDBDB] dark:text-[#424242]'>Additional Document Check</p>
                                    </div>
                                    <div className='flex mt-4 items-center justify-start gap-3'>
                                        <div>
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.88989" cy="7.36414" r="7.17163" fill="#CFFA00" />
                                                <path d="M4.58899 7.01105L6.94602 9.18672L11.1908 4.59558" stroke="black" stroke-width="1.5" />
                                            </svg>
                                        </div>
                                        <p className='font-medium text-sm text-[#DBDBDB] dark:text-[#424242]'>Video Recording</p>
                                    </div>
                                    <div className='flex mt-4 items-center justify-start gap-3'>
                                        <div>
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.88989" cy="7.36414" r="7.17163" fill="#CFFA00" />
                                                <path d="M4.58899 7.01105L6.94602 9.18672L11.1908 4.59558" stroke="black" stroke-width="1.5" />
                                            </svg>
                                        </div>
                                        <p className='font-medium text-sm text-[#DBDBDB] dark:text-[#424242]'>Live Video Call</p>
                                    </div>
                                    <div className='flex mt-4 items-center justify-start gap-3'>
                                        <div>
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.88989" cy="7.36414" r="7.17163" fill="#CFFA00" />
                                                <path d="M4.58899 7.01105L6.94602 9.18672L11.1908 4.59558" stroke="black" stroke-width="1.5" />
                                            </svg>
                                        </div>
                                        <p className='font-medium text-sm text-[#DBDBDB] dark:text-[#424242]'>Questionnaire about the project</p>
                                    </div>
                                    <div className='flex mt-4 items-center justify-start gap-3'>
                                        <div>
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.88989" cy="7.36414" r="7.17163" fill="#CFFA00" />
                                                <path d="M4.58899 7.01105L6.94602 9.18672L11.1908 4.59558" stroke="black" stroke-width="1.5" />
                                            </svg>
                                        </div>
                                        <p className='font-medium text-sm text-[#DBDBDB] dark:text-[#424242]'>Web3 Owner Wallet Check</p>
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <p className='text-[#DBDBDB] font-bold text-sm opacity-50 dark:text-[#424242]'>In case of fraud</p>


                                    <div className='flex mt-4 items-center justify-start gap-3'>
                                        <div>
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle opacity="0.3" cx="7.88989" cy="7.54187" r="7.17163" fill="white" />
                                                <path d="M4.58899 7.18878L6.94602 9.36445L11.1908 4.77332" stroke="black" stroke-width="1.5" />
                                            </svg>

                                        </div>
                                        <p className='font-medium text-sm opacity-50 text-[#DBDBDB] dark:text-[#424242]'>Release Documents to investors</p>
                                    </div>
                                    <div className='flex mt-4 items-center justify-start gap-3'>
                                        <div>
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.88989" cy="7.36414" r="7.17163" fill="#CFFA00" />
                                                <path d="M4.58899 7.01105L6.94602 9.18672L11.1908 4.59558" stroke="black" stroke-width="1.5" />
                                            </svg>
                                        </div>
                                        <p className='font-medium text-sm text-[#DBDBDB] dark:text-[#424242]'>Give Authorities Access to KYC Data</p>
                                    </div>
                                    <div className='flex mt-4 items-center justify-start gap-3'>
                                        <div>
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.88989" cy="7.36414" r="7.17163" fill="#CFFA00" />
                                                <path d="M4.58899 7.01105L6.94602 9.18672L11.1908 4.59558" stroke="black" stroke-width="1.5" />
                                            </svg>
                                        </div>
                                        <p className='font-medium text-sm text-[#DBDBDB] dark:text-[#424242]'>Actively Contact Organisations</p>
                                    </div>
                                    <div className='flex mt-4 items-center justify-start gap-3'>
                                        <div>
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.88989" cy="7.36414" r="7.17163" fill="#CFFA00" />
                                                <path d="M4.58899 7.01105L6.94602 9.18672L11.1908 4.59558" stroke="black" stroke-width="1.5" />
                                            </svg>
                                        </div>
                                        <p className='font-medium text-sm text-[#DBDBDB] dark:text-[#424242]'>Actively Contact local Authorities</p>
                                    </div>

                                </div>

                            </div>

                            <div className='mt-4'>
                                <p className='font-bold text-base  text-white dark:text-black'>Audit</p>
                            </div>
                        </div>

                        {/* security info */}
                        <div className='lg:px-8 mt-4 lg:py-6 p-4 rounded-[10px] bg-[#23252A] dark:bg-[#EFEFEF]'>
                            <div className="w-full flex justify-start">
                                <p className="font-normal text-2xl iceland text-white dark:text-black">Security Info</p>
                            </div>
                            <div>
                                <p className='font-semibold text-sm  text-[#DBDBDB] opacity-50 mt-4 dark:text-[#313131]'>This security scan is done by Goplus and is only an indication of contract security. Not all potential threats and exploits are detected. Always DYOR.</p>

                            </div>

                            <div className='flex w-full mt-6 flex-col gap-2'>
                                <div className='flex w-full justify-between'>
                                    <p className='text-[#DBDBDB] font-semibold dark:text-[#878787] text-base opacity-50'>Holder Count</p>
                                    <p className='text-[#DBDBDB] font-semibold text-base'>1</p>
                                </div>
                                <div className='flex w-full justify-between'>
                                    <p className='text-[#DBDBDB] font-semibold dark:text-[#878787] text-base opacity-50'>Buy / Sell Tax</p>
                                    <p className='text-[#DBDBDB] dark:text-[#353535] font-semibold text-base flex items-center gap-2'>
                                        <span>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.39331" cy="7.42261" r="7.17163" fill="#CFFA00" />
                                                <path d="M4.09239 7.06927L6.44943 9.24494L10.6942 4.65381" stroke="black" stroke-width="1.5" />
                                            </svg>
                                        </span>0.0% / 0.0%</p>
                                </div>

                                <div className='flex w-full justify-between'>
                                    <p className='text-[#DBDBDB] font-semibold dark:text-[#878787] text-base opacity-50'>Owner Holdings</p>
                                    <p className='text-[#DBDBDB] dark:text-[#353535] font-semibold text-base flex items-center gap-2'>
                                        <span>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.39331" cy="7.42261" r="7.17163" fill="#CFFA00" />
                                                <path d="M4.09239 7.06927L6.44943 9.24494L10.6942 4.65381" stroke="black" stroke-width="1.5" />
                                            </svg>
                                        </span>0.0% of supply</p>
                                </div>

                                <div className='flex w-full justify-between'>
                                    <p className='text-[#DBDBDB] font-semibold dark:text-[#878787] text-base opacity-50'>Top 10 Holders</p>
                                    <p className='text-[#FF5555] dark:text-[#FF5555] font-semibold text-base flex items-center gap-2'>
                                        100.0% of supply</p>
                                </div>

                                <div className='flex w-full justify-between'>
                                    <p className='text-[#DBDBDB] font-semibold dark:text-[#878787] text-base opacity-50'>Honeypot Check</p>
                                    <p className='text-[#CFFA00] dark:text-[#B9DB16] font-semibold text-base flex items-center gap-2'>
                                        <span>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7.39331" cy="7.42261" r="7.17163" fill="#CFFA00" />
                                                <path d="M4.09239 7.06927L6.44943 9.24494L10.6942 4.65381" stroke="black" stroke-width="1.5" />
                                            </svg>
                                        </span>Passed</p>
                                </div>
                                <div className='relative w-full mt-4'>
                                    <div className='w-full bg-[#CFFA00] justify-center flex py-4 rounded-[10px] '>
                                        <p className='font-bold text-sm text-black'>Request for Security Scan</p>
                                    </div>
                                    <div className='absolute right-[-10px] bottom-[-2px]'>
                                        <div className=' h-[56px] w-[53px] '>
                                            <img src='/Images/btnfooter.png' className='w-full h-full'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <PromotedTable />
            </div>
        </>
    )
}

export default ChartComp