import React, { useState } from 'react'
import {
    Link,
    NavLink,
    Outlet
} from 'react-router-dom'
import { connect } from "react-redux";

import {
    FaGripLinesVertical,
    FaShoppingBag,
    FaUser
} from "react-icons/fa";
import Login from './ModalLogin';
import UserDropdown from '../../components/UserDropdown';
import { path } from '../../utils/constant';
import Footer from './Footer';
import logo from '../../assets/logo/logo-header.png'


const Links = [
    {
        name: 'Trang chủ',
        link: path.HOME
    },
    {
        name: 'Giới thiệu',
        link: path.INTRODUCE
    },
    {
        name: 'Giày nam',
        link: path.MEN
    },
    {
        name: 'Thời trang nam',
        link: path.MEN
    },
    {
        name: 'Giày nữ',
        link: path.WOMAN
    },
    {
        name: 'Thời trang nữ',
        link: path.WOMAN
    },
    {
        name: 'Liên hệ',
        link: path.CONTACT
    },

]

const Header = (props) => {
    const [showModal, setShowModal] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    const onShowModal = (data) => {
        setShowModal(data)
        // console.log(data)
    }

    const handleShowDropdown = () => {
        setShowDropdown(!showDropdown)
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
                            {
                                props.isLogin === true ?
                                    <div>
                                        <UserDropdown />

                                    </div>
                                    :
                                    <FaUser
                                        className='cursor-pointer'
                                        size={'20px'} width={'24px'}
                                        onClick={() => {
                                            setShowModal(!showModal)
                                        }}

                                    />
                            }

                            <FaGripLinesVertical size={'20px'} className='opacity-40 mx-2' />
                            <FaShoppingBag size={'20px'} fontSize={'24px'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-main'>
                <div className='h-11 leading-[44px] font-medium uppercase text-sm'>
                    <div className='flex justify-center space-x-3.5'>
                        {
                            Links.map((item, index) => {
                                return (
                                    <NavLink key={index} to={item.link}>{item.name}</NavLink>

                                )
                            })
                        }
                    </div>
                </div>

            </div>
            {showModal ? <Login onShowModal={onShowModal} /> : null}
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // authLogin: (email, password) => dispatch(authLogin(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);