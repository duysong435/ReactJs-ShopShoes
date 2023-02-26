import React from 'react'
import {
    FaCcMastercard,
    FaCcPaypal,
    FaCcStripe,
    FaCcVisa,
    FaFacebook,
    FaInstagramSquare,
    FaTwitter
} from 'react-icons/fa'

const Footer = () => {


    return (
        <div className='mt-8'>
            <div className='bg-[#292929] h-[320px]'>
                <div className='grid grid-cols-4 gap-6 mx-[22%] text-white text-[13px] pt-7'>
                    <div className=''>
                        <ul>
                            <li className='font-semibold relative 
                            after:bottom-0 after:left-0 after:duration-300  after:ease-in-out
                            after:w-[10%] after:h-[2px] after:absolute after:bg-[#5b5b5b]  hover:after:w-full'>
                                <h3 className='text-base'>
                                    VỀ CHÚNG TÔI
                                </h3>
                            </li>
                            <li>
                                Shop Giày cao cấp Rossy Store
                            </li>
                            <li>
                                - Hotline: 0986.989.626<br />
                            </li>
                            <li>
                                - Bán hàng: 0986.989.626<br />
                            </li>
                            <li>
                                - Email: topweb.com.vn@gmail.com<br />
                            </li>
                            <li>
                                - Địa chỉ: Phường hòa Quỹ - Ngũ Hành Sơn - TP Đà Nẵng<br />
                            </li>
                        </ul>
                        <div className='flex felx-co gap-1'>
                            <div className='border-[1px] border-white rounded-full p-2 hover:bg-white cursor-pointer duration-200 ease-in-out'>
                                <FaFacebook size={'25px'} color={'#5b5b5b'} />
                            </div>
                            <div className='border-[1px] border-white rounded-full p-2 hover:bg-white cursor-pointer duration-200 ease-in-out'>
                                <FaInstagramSquare size={'25px'} color={'#5b5b5b'} />
                            </div>
                            <div className='border-[1px] border-white rounded-full p-2 hover:bg-white cursor-pointer duration-200 ease-in-out'>
                                <FaTwitter size={'25px'} color={'#5b5b5b'} />
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li className='font-semibold relative 
                            after:bottom-0 after:left-0 after:duration-300  after:ease-in-out
                            after:w-[10%] after:h-[2px] after:absolute after:bg-[#5b5b5b]  hover:after:w-full'
                        >
                            <h3 className='text-base'>TIN TỨC MỚI</h3>
                        </li>
                        <li>
                            Hiệu quả không gian: đẳng cấp thiết kế nhà phố
                        </li>
                        <li>
                            Không gian sống xanh giữa lòng thủ đô
                        </li>
                        <li>
                            Phong cách hiện đại trong thiết kế nội thất là gì?
                        </li>
                        <li>
                            Người dùng chuộng nội thất sạch, chuẩn châu Âu
                        </li>
                    </ul>
                    <ul>
                        <li className='font-semibold relative 
                            after:bottom-0 after:left-0 after:duration-300  after:ease-in-out
                            after:w-[10%] after:h-[2px] after:absolute after:bg-[#5b5b5b]  hover:after:w-full'
                        >
                            <h3 className='text-base'>
                                ĐĂNG KÝ NHẬN BẢN TIN
                            </h3>
                        </li>
                        <li>
                            Đăng ký nhận bản tin từ chúng tôi để không bỏ lỡ những khuyến mại lớn dành riêng cho bạn.
                        </li>
                        <li className='mt-4'>
                            <input className='h-8 w-full bg-[#5b5b5b] outline-none rounded-2xl px-2 text-sm leading-8 placeholder:text-white'
                                placeholder='Your Email (required)'
                            />
                            <button className='bg-black text-base rounded-2xl py-1 px-4 uppercase font-medium mt-2'>
                                Sign up
                            </button>
                        </li>
                    </ul>
                    <div className=''>
                        <div className='font-semibold relative 
                            after:bottom-0 after:left-0 after:duration-300  after:ease-in-out
                            after:w-[10%] after:h-[2px] after:absolute after:bg-[#5b5b5b]  hover:after:w-full'>
                            <h3 className=' text-base uppercase'>Fanpage</h3>

                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#5b5b5b] h-[80px] '>
                <div className='mx-[22%] flex justify-between pt-3'>
                    <div>
                        <ul className='flex flex-row gap-2 uppercase text-[13px] font-medium text-white opacity-60 '>
                            <li>Giới thiệu</li>
                            <li>Chính sách chung</li>
                            <li>Liên hệ</li>
                        </ul>
                        <div className='h-[1px] w-full bg-white opacity-60 my-1'></div>
                        <span>
                            <span className='text-[14px] text-white opacity-60'>Copyright 2017 ©</span>
                            <span className='text-[15px] font-medium text-white opacity-60'>Thiết kế website Hà Nội bởi Topweb.com.vn</span>
                        </span>
                    </div>
                    <ul className='flex gap-1 '>
                        <li>
                            <FaCcVisa className='h-10 w-10 ' />
                        </li>
                        <li>
                            <FaCcPaypal className='h-10 w-10 ' />
                        </li>
                        <li>
                            <FaCcStripe className='h-10 w-10 ' />
                        </li>
                        <li>
                            <FaCcMastercard className='h-10 w-10 ' />
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer