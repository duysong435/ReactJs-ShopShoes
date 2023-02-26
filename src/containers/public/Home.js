import React from 'react'
import Header from './Header'
// import Navigation from './Navigation'
import Slider from "react-slick";
import './Home.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import baner from '../../assets/baner11.jpg'
import iconCar from '../../assets/icon-car.png'
import iconStar from '../../assets/icon-star.png'
import circleDollar from '../../assets/circle-dollar-64.png'
import product from '../../assets/product/product1.jpg'
import Footer from './Footer';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
        <div className=''>
            <Header />
            <div className='h-[400px] '>
                <Slider {...settings} className='h-[400px] cursor-grab active:cursor-grabbing'>
                    <div className='home-baner'
                        style={{
                            backgroundImage: "url('../../assets/baner11.jpg')"
                        }}
                    >
                    </div>
                    <div className='home-baner'
                        style={{
                            backgroundImage: "url('../../assets/baner11.jpg')"
                        }}>
                    </div>
                </Slider>
            </div >
            {/* Gioa hàng */}
            <div>
                <div className='flex justify-center tracking-tighter'>
                    <div className='h-[198px] w-[360px] flex flex-col  text-center col-span-1 px-4 pb-7 '>
                        <div className='px-[40%]'>
                            <img src={iconCar} alt='' className='h-16 w-16 ' />
                        </div>
                        <span>Giao hàng miễn phí</span>
                        <span>Tất cả sản phẩm đều được vận chuyển miễn phí</span>
                    </div>
                    <div className='h-[198px] w-[360px] flex flex-col text-center col-span-1 px-4 pb-7'>
                        <div className='px-[40%]'>
                            <img src={iconStar} alt='' className='h-16 w-16' />
                        </div>
                        <span>Bảo hành sản phẩm 1 năm</span>
                        <span>Dịch vụ chăm sóc khách hàng nhiệt tình, chu đáo, tận tâm nhất</span>
                    </div>
                    <div className='h-[198px] w-[360px] flex flex-col text-center col-span-1 px-4 pb-7'>
                        <div className='px-[40%]'>
                            <img src={circleDollar} alt='' className='h-16 w-16' />
                        </div>
                        <span>Giá cả luôn hợp lý nhất</span>
                        <span>Luôn luôn tiết kiệm chi phí nhất cho khách hàng…</span>
                    </div>
                </div>
            </div>
            {/* Product */}
            <div className='mx-[22%] mb-8 pb-4'>
                <div className='flex justify-center'>
                    <div className='w-full pt-3'>
                        <div className='border-2 border-black opacity-30'></div>
                    </div>
                    <span className='w-full text-center uppercase text-xl font-medium'>Sản phẩm bán chạy tuần qua</span>
                    <div className='w-full pt-3'>
                        <div className='border-2 border-black opacity-30'></div>
                    </div>
                </div>
            </div>
            <div className='h-[500px] '>
                <div className='mx-[22%] h-full flex flex-wrap justify-evenly bg-slate-400'>
                    <div className='w-[247px] h-[252px] mb-5 shadow shadow-[#878282]'>
                        <div className='h-[75%] '>
                            <img
                                src={product} alt='as'
                                className='h-full w-full'
                            />
                        </div>
                        <div className='h-[25%] text-center text-black-text bg-white'>
                            <span>Nike train speed 4</span><br />
                            <span className='text-red-price font-semibold'>6,200,000</span>
                        </div>
                    </div>
                    <div className='w-[247px] h-[252px]  mb-5 shadow shadow-[#878282]'>
                        <div className='h-[75%] '>
                            <img
                                src={product} alt='as'
                                className='h-full w-full'
                            />
                        </div>
                        <div className='h-[25%] text-center text-black-text bg-white'>
                            <span>Nike train speed 4</span><br />
                            <span className='text-red-price font-semibold'>6,200,000</span>
                        </div>
                    </div>
                    <div className='w-[247px] h-[252px]  mb-5 shadow shadow-[#878282]'>
                        <div className='h-[75%] '>
                            <img
                                src={product} alt='as'
                                className='h-full w-full'
                            />
                        </div>
                        <div className='h-[25%] text-center text-black-text bg-white'>
                            <span>Nike train speed 4</span><br />
                            <span className='text-red-price font-semibold'>6,200,000</span>
                        </div>
                    </div>
                    <div className='w-[247px] h-[252px]  mb-5 shadow shadow-[#878282]'>
                        <div className='h-[75%] '>
                            <img
                                src={product} alt='as'
                                className='h-full w-full'
                            />
                        </div>
                        <div className='h-[25%] text-center text-black-text bg-white'>
                            <span>Nike train speed 4</span><br />
                            <span className='text-red-price font-semibold'>6,200,000</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chay hanh */}
            <div className='mx-[22%] mb-8 pb-4'>
                <div className='flex justify-center'>
                    <div className='w-full pt-3'>
                        <div className='border-2 border-black opacity-30'></div>
                    </div>
                    <span className='w-full text-center uppercase text-xl font-medium'>Sản phẩm bán chạy tuần qua</span>
                    <div className='w-full pt-3'>
                        <div className='border-2 border-black opacity-30'></div>
                    </div>
                </div>
            </div>
            <div className='h-[500px] '>
                <div className='mx-[22%] h-full flex flex-wrap justify-evenly bg-slate-400'>
                    <div className='w-[247px] h-[252px] mb-5 shadow shadow-[#878282]'>
                        <div className='h-[75%] '>
                            <img
                                src={product} alt='as'
                                className='h-full w-full'
                            />
                        </div>
                        <div className='h-[25%] text-center text-black-text bg-white'>
                            <span>Nike train speed 4</span><br />
                            <span className='text-red-price font-semibold'>6,200,000</span>
                        </div>
                    </div>
                    <div className='w-[247px] h-[252px]  mb-5 shadow shadow-[#878282]'>
                        <div className='h-[75%] '>
                            <img
                                src={product} alt='as'
                                className='h-full w-full'
                            />
                        </div>
                        <div className='h-[25%] text-center text-black-text bg-white'>
                            <span>Nike train speed 4</span><br />
                            <span className='text-red-price font-semibold'>6,200,000</span>
                        </div>
                    </div>
                    <div className='w-[247px] h-[252px]  mb-5 shadow shadow-[#878282]'>
                        <div className='h-[75%] '>
                            <img
                                src={product} alt='as'
                                className='h-full w-full'
                            />
                        </div>
                        <div className='h-[25%] text-center text-black-text bg-white'>
                            <span>Nike train speed 4</span><br />
                            <span className='text-red-price font-semibold'>6,200,000</span>
                        </div>
                    </div>
                    <div className='w-[247px] h-[252px]  mb-5 shadow shadow-[#878282]'>
                        <div className='h-[75%]'>
                            <img
                                src={product} alt='as'
                                className='h-full w-full'
                            />
                        </div>
                        <div className='h-[25%] text-center text-black-text bg-white'>
                            <span>Nike train speed 4</span><br />
                            <span className='text-red-price font-semibold'>6,200,000</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Home