import React, { useRef } from 'react';

const CustomImageUpload = ({ onFileSelect }) => {
    const fileInputRef = useRef(null);

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            onFileSelect(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileSelect}
                accept="image/*"
            />
            <div className='relative w-full'>
                <div className=' absolute top-left-cut-index bg-[#191B20] dark:bg-white'>

                </div>
                <div onClick={handleClick} className='bg-[#191B20] border border-[#FFFFFF1A] dark:border:none dark:bg-white flex justify-center items-center min-h-[117px] rounded-[10px]' style={{ cursor: 'pointer' }}>
                    <div className='flex items-center'>
                        <p className='opacity-30 font-medium text-sm mx-2 text-white dark:text-black'>Click to</p>
                        <div>
                            <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle className='dark:stroke-black' cx="34.8383" cy="35.6647" r="28.0812" stroke="white" stroke-opacity="0.15" />
                                <circle className='dark:stroke-black' cx="34.8384" cy="35.6646" r="34.2319" stroke="white" stroke-opacity="0.15" stroke-dasharray="2 2" />
                                <path d="M35.1226 23.3506V45.9253" stroke="#343434" />
                                <path d="M46.4099 34.6382L23.8352 34.6382" stroke="#343434" />
                            </svg>
                        </div>
                        <p className='opacity-30 font-medium text-sm mx-2 text-white dark:text-black'>Upload Image</p>
                    </div>
                </div>
                <div className=' absolute bottom-right-cut-index bg-[#191B20] dark:bg-white'>

                </div>
            </div>

        </div>
    );
};

export default CustomImageUpload;