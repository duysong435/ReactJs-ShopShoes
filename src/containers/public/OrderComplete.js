import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';

import { TfiAngleDoubleRight } from "react-icons/tfi";
import { convertImg } from '../../utils/Convert';

import { isPaid, path, payment } from '../../utils/constant';
import { getDetailService } from '../../services/productService';

import img1 from '../../assets/product/product1.jpg'
import { getOrder } from '../../store/actions/authAction';
import { deleteOrderService, getOrderDetailService, getOutCheckService } from '../../services/orderService';
import { toast } from 'react-toastify';
import { formatDate, formatPrice } from '../../utils/Format';

export const OrderComplete = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation();

    const order_id = location.state.order_id;

    const [arrOrderDetail, setArrOrderDetail] = useState([])


    const { arrOrder, idUser } = useSelector(state => state.auth)
    // const { arrCart } = useSelector(state => state.app)

    const getOrderDetail = async () => {
        const response = await getOutCheckService({ order_id: order_id })
        console.log('ket qua', response)
        if (response && response.errCode === 0) {
            setArrOrderDetail(response?.response)
        } else {
            toast.error('Server Error!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }

    const sumPrice = () => {
        const total = arrOrderDetail.reduce((price, value) => {
            return price + (value?.Order_Details?.amount * value?.Order_Details?.price)
        }, 0)
        return total
    }

    useEffect(() => {
        // getOrderDetailService({ order_id: '' })
        getOrderDetail()
    }, [])
    console.log(order_id)
    return (
        <div>
            <div className='mx-[25%]'>
                <div className='flex justify-center items-center text-2xl gap-3 mt-10'>
                    <span>Shopping Cart</span>
                    <TfiAngleDoubleRight />
                    <span>Checkout Details</span>
                    <TfiAngleDoubleRight />
                    <span>Order Complete</span>
                </div>
                <div className='mt-10'>
                    <div className='grid grid-cols-6 gap-5'>
                        <div className='col-span-3 border-dashed border-2 border-gray-600'>
                            <div className='m-4'>
                                <span className='text-xl font-normal'>
                                    Cảm ơn bạn. Đơn hàng của bạn đã được nhận.
                                </span>
                                <ul className='list-disc mx-4 gap-y-9 mt-4'>
                                    <li className='mb-4'>
                                        <span>Ngày:</span>
                                        <span className='ml-2 font-semibold' >
                                            {formatDate(arrOrderDetail[0]?.createdAt)}
                                        </span>
                                    </li>
                                    <li className='mb-4'>
                                        <span>Tổng cộng:</span>
                                        <span className='ml-2 font-semibold text-red-400'>{formatPrice(sumPrice())}₫</span>
                                    </li>
                                    <li className='mb-4'>
                                        <span>Phương thức thanh toán:</span>
                                        <span className='ml-2 font-semibold'>{arrOrderDetail[0]?.payment_method === payment.CASH ? 'Tiền mặt' : payment.PAYPAL}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-3 border-2 border-solid'>
                            <div className='m-4'>
                                <div>
                                    <h1 className='text-3xl font-semibold mb-2'> Order Details</h1>
                                    <div className='flex justify-between font-semibold uppercase'>
                                        <div className=''>Sản phẩm</div>
                                        <div>Tổng cộng</div>
                                    </div>
                                    {
                                        arrOrderDetail && arrOrderDetail.length > 0 &&
                                        arrOrderDetail.map((item, index) => {
                                            return (
                                                <div className='flex justify-between ml-2 '>
                                                    <span>{item?.Order_Details?.dataProduct?.name}</span>
                                                    <span className='font-semibold text-red-400 '>{formatPrice(item?.Order_Details?.amount * item?.Order_Details?.price)}₫</span>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className='flex justify-between font-semibold uppercase'>
                                        <span>Phương thức thanh toán:</span>
                                        <span>{arrOrderDetail[0]?.payment_method === payment.CASH ? 'Tiền mặt' : payment.PAYPAL}</span>
                                    </div>
                                    <div className='flex justify-between font-semibold uppercase'>
                                        <span>Tổng cộng</span>
                                        <span className='text-red-400'>{formatPrice(sumPrice())}₫</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderComplete