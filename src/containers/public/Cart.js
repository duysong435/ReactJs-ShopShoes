import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom';

import { TfiAngleDoubleRight } from "react-icons/tfi";
import { getAllCart } from '../../store/actions';
import { convertImg } from '../../utils/Convert';

import { path } from '../../utils/constant';


export const Cart = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const { idUser, isLoggedIn, arrCart } = useSelector(state => state.auth)

    const SumPrice = (a, b) => {
        return a * b
    }

    useEffect(() => {
        if (!isLoggedIn) {

        } else {
            // props.getCart(props.idUser)
            dispatch(getAllCart(idUser))
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
                        <div className="overflow-x-auto">
                            <div className="p-1.5 w-full inline-block align-middle">
                                <div className="overflow-hidden border rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                >
                                                    ID
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                >
                                                    Tên Sản phẩm
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                >
                                                    Sản phẩm
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                >
                                                    Giá
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                                >
                                                    Size
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                                >
                                                    Số lượng
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                                >
                                                    Tổng cộng
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {
                                                arrCart && arrCart.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                                {index}
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                                {item.productData.name}
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                                <div
                                                                    className='h-20 w-20 bg-cover'
                                                                    style={{ backgroundImage: `url(${convertImg(item.productData.image)})` }}>

                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-800  text-left whitespace-nowrap">
                                                                {item.productData.price}
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-800  text-right whitespace-nowrap">
                                                                {item.size}
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-800  text-right whitespace-nowrap">
                                                                {item.amount}
                                                            </td>
                                                            <td className="px-6 py-4 text-sm  text-center whitespace-nowrap">
                                                                <div className='flex justify-center gap-3'>
                                                                    {
                                                                        SumPrice(item.productData.price, item.amount)
                                                                    }
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div>
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
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded uppercase"
                                onClick={() => navigate(path.CHECKOUT)}
                            >
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

export default Cart