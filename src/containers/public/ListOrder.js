import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom';

import { TfiAngleDoubleRight } from "react-icons/tfi";
import { convertImg } from '../../utils/Convert';

import { isPaid, path } from '../../utils/constant';
import { getDetailService } from '../../services/productService';

import img1 from '../../assets/product/product1.jpg'
import { getOrder } from '../../store/actions/authAction';
import { deleteOrderService, getOrderDetailService } from '../../services/orderService';
import { toast } from 'react-toastify';

export const ListOrder = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { arrOrder, idUser } = useSelector(state => state.auth)
    // const { arrCart } = useSelector(state => state.app)

    const [arrOrderDetail, setArrOrderDetail] = useState([])

    const arrCarts = []

    const handleDetailOrder = async (idOrder) => {
        const response = await getOrderDetailService({ order_id: idOrder })
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

    const handleDeleteOrder = async (idOrder) => {
        await deleteOrderService(idOrder)
        setTimeout(() => {
            dispatch(getOrder({ user_id: idUser })) 
        }, 2000)

    }

    useEffect(() => {
        dispatch(getOrder({ user_id: idUser }))
    }, [])
    console.log(idUser)
    console.log(arrOrder)
    return (
        <div>
            <div className='mx-[22%]'>
                <div className='mb-5'>
                    <span className='text-2xl'>Đơn hàng của tôi</span>
                </div>
                {
                    arrOrder && arrOrder.length > 0 &&
                    arrOrder.map((item, index) => {
                        return (
                            <div key={item.id} className='min-h-min relative border border-[#BDB2B2] rounded-xl mb-4'>
                                <div className='m-2'>
                                    <div className='flex gap-2'>
                                        <span className='text-red-500'>Giao hàng:</span>
                                        <span>Chưa giao</span>
                                    </div>
                                    <div className='flex mb-1 gap-2'>
                                        <span className='text-red-500'>Thanh toán:</span>
                                        <span>{item.is_paid ? isPaid.PAID : isPaid.UNPAID}</span>
                                    </div>
                                    <div className='flex'>
                                        {/* <div style={{backgroundImage:''}}></div> */}
                                        {/* <img src={img1} alt='' /> */}
                                        {/* <div
                                className='h-20 w-20 bg-cover'``
                                style={{ backgroundImage: `url(${img1})` }}
                            >
                            </div> */}
                                        <div>

                                        </div>
                                    </div>
                                    <div className='flex justify-end mr-2 gap-2'>
                                        <span className='text-red-400'>Tổng tiền:</span>
                                        <span>{item.total_money}</span>
                                    </div>
                                    <div className=''>
                                        <div className='flex justify-end gap-2 mr-2'>
                                            <button className='border-2 p-1 rounded-lg border-red-400 hover:bg-red-400'
                                                onClick={() => handleDeleteOrder(item.id)}
                                            >Huỷ đơn hàng</button>
                                            <button className='border-2 p-1 rounded-lg border-blue-400 hover:bg-blue-400'
                                                onClick={() => handleDetailOrder(item.id)}
                                            >Xem chi tiết</button>
                                        </div>
                                    </div>
                                </div>
                                {
                                    arrOrderDetail[0] && arrOrderDetail[0].order_id === item.id &&
                                    <div className="overflow-x-auto min-h-max  max-h-[500px]">
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
                                                                Số lượng
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
                                                                Giá
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
                                                            arrOrderDetail && arrOrderDetail.length > 0 && arrOrderDetail.map((item, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                                            {index}
                                                                        </td>
                                                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                                            {item?.dataProduct?.name}
                                                                        </td>
                                                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                                            <div
                                                                                className='h-20 w-20 bg-cover'
                                                                                style={{ backgroundImage: `url(${convertImg(item?.dataProduct?.image)})` }}
                                                                            ></div>
                                                                        </td>
                                                                        <td className="px-6 py-4 text-sm text-gray-800  text-left whitespace-nowrap">
                                                                            {item.amount}
                                                                        </td>
                                                                        <td className="px-6 py-4 text-sm text-gray-800  text-right whitespace-nowrap">
                                                                            {item.size}
                                                                        </td>
                                                                        <td className="px-6 py-4 text-sm text-gray-800  text-right whitespace-nowrap">
                                                                            {item.price}
                                                                        </td>
                                                                        <td className="px-6 py-4 text-sm  text-center whitespace-nowrap">
                                                                            <div className='flex justify-center gap-3'>
                                                                                {
                                                                                    // SumPrice(item.productData.price, item.amount)
                                                                                    item.total
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
                                }
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default ListOrder