import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo-header.png'

import Navigation from './Navigation';
import {
    FaGripLinesVertical,
    FaShoppingBag,
    FaUser
} from "react-icons/fa";
import Login from './ModalLogin';

const Header = (props) => {
    const [showModal, setShowModal] = useState(false)
    const onShowModal = (data) => {
        setShowModal(data)
        // console.log(data)
    }
    return (
        <React.Fragment>
            <div className='w-full h-[69px] bg-white'>
                <div className='w-full '>
                    <div className=' flex justify-center gap-[17%] leading-[69px]'>
                        <div className=''>
                            <button
                                className='h-[34px] w-[153px] bg-black text-white font-bold rounded-3xl uppercase text-sm'
                            >
                                Liên hệ mua ngay
                            </button>
                        </div>
                        <div className='text-center' >
                            <Link to={'/'} className=''>
                                <img
                                    src={logo}
                                    alt={'logo'}
                                    className='pt-6 w-[169px]'
                                />
                            </Link>
                        </div>
                        <div className='flex items-center'>
                            <FaUser
                                className='cursor-pointer'
                                size={'20px'} width={'24px'}
                                onClick={() => {
                                    setShowModal(!showModal)
                                }}

                            />
                            <FaGripLinesVertical size={'20px'} className='opacity-40 mx-2' />
                            <FaShoppingBag size={'20px'} fontSize={'24px'} />
                        </div>
                    </div>
                </div>
            </div>
            <Navigation />
            {showModal ? <Login onShowModal={onShowModal} /> : null}
        </React.Fragment>
    )
}

export default Header