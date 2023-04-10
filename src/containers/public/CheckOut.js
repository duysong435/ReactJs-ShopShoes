import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { TfiAngleDoubleRight } from "react-icons/tfi";
import { getAllCart } from '../../store/actions';
import { convertImg } from '../../utils/Convert';

import { path } from '../../utils/constant';


export const CheckOut = (props) => {
    const navigate = useNavigate()

    const SumPrice = (a, b) => {
        return a * b
    }

    useEffect(() => {
        if (!props.isLogin) {

        } else {
            props.getCart(props.idUser)
        }
    }, [])
    return (
        <div>
            <div className='mx-[18%]'>
                <div className='flex justify-center items-center text-2xl gap-3 mt-10'>
                    <span>Shopping Cart</span>
                    <TfiAngleDoubleRight />
                    <span>Checkout Details</span>
                    <TfiAngleDoubleRight />
                    <span>Order Complete</span>
                </div>
                <div className='grid grid-cols-6 mt-10'>
                    <div className="flex flex-col pb-10 col-span-4">
                        <div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full h-10  px-2 border-2 outline-none
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                // value={user.email}
                                // onChange={(e) => setUser({ ...user, email: e.target.value })}
                                // disabled={actionUser === CRUD_ACTIOND.EDIT ? true : false}
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full h-10  px-2 border-2 outline-none
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                // value={user.email}
                                // onChange={(e) => setUser({ ...user, email: e.target.value })}
                                // disabled={actionUser === CRUD_ACTIOND.EDIT ? true : false}
                                />
                            </div>
                            <div className='flex flex-col text-sm'>
                                <button className='bg-white border-2 border-black py-2 px-3 w-[250px] uppercase'
                                    onClick={() => {
                                        navigate(path.HOME)
                                    }}
                                >
                                    Tiếp tục mua hàng
                                </button>
                                <button className=' py-2 px-3 bg-black text-white mt-2 w-[200px] uppercase'
                                    onClick={() => {
                                        props.getCart(props.idUser)

                                    }}
                                >
                                    Cập nhật giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* End table */}
                    <div className='col-span-2 ml-4 text-base'>
                        <div className='flex w-[60%] gap-x-10 border-b-[3px] uppercase'>
                            <b>Tổng giỏ hàng</b>
                        </div>
                        <div className='flex w-[60%] justify-between gap-x-10 border-b-[1px] mt-3 uppercase'>
                            <b>Tổng phụ</b>
                            <span>100000</span>
                        </div>
                        <div className='flex w-[60%] justify-between gap-x-10 border-b-[3px] mt-3 uppercase'>
                            <b>Tổng cộng</b>
                            <span>1000000</span>
                        </div>
                        <div className='w-full mt-4'>
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded uppercase">
                                Thanh toán
                            </button>
                        </div>
                        <div className='mt-6 uppercase w-full'>
                            <div className='border-b-[3px] mb-3'>
                                <span className=' font-bold'>Phiếu ưu đãi</span>
                            </div>
                            <input
                                className='h-10 w-full border-[1px] rounded-sm outline-none px-1'
                                type={'text'}
                                placeholder={'Mã ưu đãi'}
                            />
                            <div className='mt-4'>
                                <button className='w-full bg-black text-white py-2 uppercase font-bold'>
                                    Áp dụng mã ưu đãi
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLoggedIn,
        idUser: state.auth.idUser,
        arrCart: state.auth.arrCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCart: (idUser) => dispatch(getAllCart(idUser))
    }
}

export default CheckOut