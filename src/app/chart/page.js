'use client';
import React, { useState, useEffect } from 'react';
import Modal from '../Components/Modal';
import Navbar from '../Components/Navbar';
import ChartComp from './ChartComp';


const Chart = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        localStorage.setItem('modalClosed', 'true');
    };

    const [openPrivacy, setOpenPrivacy] = useState(false);

    useEffect(() => {
        if (openPrivacy) {
            setIsModalOpen(true); // Open the modal
        } else {
            setIsModalOpen(false);
        }
    }, [openPrivacy]);

    useEffect(() => {
        const body = document.body;
        if (isModalOpen) {
            // Disable scrolling when the modal is open
            body.style.overflow = "hidden";
        } else {
            // Re-enable scrolling when the modal is closed
            body.style.overflow = "auto";
        }

        // Cleanup: Reset the overflow style when the component unmounts
        return () => {
            body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    const handleToggleModal = () => {
        setOpenPrivacy(!openPrivacy); // Toggle the privacy state
    };
    return (
        <>
            <div className='dark:bg-white bg-[#191B20] min-h-screen'>
                <Modal isOpen={isModalOpen} handleToggleModal={handleToggleModal} onClose={handleCloseModal} setOpenPrivacy={setOpenPrivacy} openPrivacy={openPrivacy}></Modal>
                <Navbar setOpenPrivacy={setOpenPrivacy} handleToggleModal={handleToggleModal}>
                </Navbar>
                <ChartComp />
            </div>
        </>
    )
}

export default Chart;