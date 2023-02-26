import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { path } from '../../utils/constant'

const Links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Home',
        link: '/'
    },

]

const Navigation = () => {
    return (
        <div className='w-full bg-main'>
            <div className='h-11 leading-[44px] font-medium uppercase text-sm'>
                <div className='flex justify-center space-x-3.5'>
                    <NavLink to={path.HOME}>Trang chủ</NavLink>
                    <NavLink to={path.INTRODUCE}>Giới thiệu</NavLink>
                    <NavLink to={path.MEN}>Giày nam</NavLink>
                    <Link>Thời trang nam</Link>
                    <NavLink to={path.WOMAN}>Giày nữ</NavLink>
                    <Link>Thời trang nữ</Link>
                    <NavLink to={path.CONTACT}>Liên hệ</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Navigation