import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from "react-redux";

import {
    FaEdit,
    FaRegWindowClose,
    FaTrashAlt
} from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";

import { getAdminOrderDetail } from '../../services/orderService';
import { toast } from 'react-toastify';
import { formatDate, formatPrice } from '../../utils/Format';
import { isPaid, path, payment } from '../../utils/constant';
import { AiOutlineClose } from 'react-icons/ai';
import { convertImg } from '../../utils/Convert';
import { useNavigate, useParams } from 'react-router-dom';

const DetailOrder = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let { id } = useParams();
    const [arrOrderDetail, setArrOrderDetail] = useState([])

    const getListOrder = async () => {
        const response = await getAdminOrderDetail({ order_id: id })
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

    const priceShoes = (a, b) => {
        return a * b
    }

    useEffect(() => {
        getListOrder()
    }, [])
    console.log(arrOrderDetail)

    return (

        <>
            <div
                className="  flex justify-end top-6 h-[100vh] w-[99vw] overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="absolute  w-[85%]  ">
                    {/*content*/}
                    <div className="border-0  shadow-lg relative flex flex-col rounded-lg  bg-white outline-none focus:outline-none">
                        <div className='flex justify-between'>
                            <div className=''></div>
                            <AiOutlineClose className='text-3xl cursor-pointer'
                                onClick={() => navigate(path.SYSTEM + '/' + path.MANAGER_ORDER)}
                            />
                        </div>
                        <div className='min-h-max max-h-[800px] '>
                            {
                                <div className="overflow-x-auto min-h-max  max-h-[800px]">
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
                                                                        {item?.Order_Details?.dataProduct?.name}
                                                                    </td>
                                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                                        <div
                                                                            className='h-20 w-20 bg-cover'
                                                                            style={{ backgroundImage: `url(${convertImg(item?.Order_Details?.dataProduct?.image)})` }}
                                                                        ></div>
                                                                    </td>
                                                                    <td className="px-6 py-4 text-sm text-gray-800  text-left whitespace-nowrap">
                                                                        {item?.Order_Details?.amount}
                                                                    </td>
                                                                    <td className="px-6 py-4 text-sm text-gray-800  text-right whitespace-nowrap">
                                                                        {item?.Order_Details?.size}
                                                                    </td>
                                                                    <td className="px-6 py-4 text-sm text-gray-800  text-right whitespace-nowrap">
                                                                        {formatPrice(item?.Order_Details?.price)}
                                                                    </td>
                                                                    <td className="px-6 py-4 text-sm  text-center whitespace-nowrap">
                                                                        <div className='flex justify-end gap-3'>
                                                                            {
                                                                                // SumPrice(item.productData.price, item.amount)
                                                                                formatPrice(priceShoes(item?.Order_Details?.amount, item?.Order_Details?.price))
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
                                        <div className='flex justify-end items-center gap-10 '>
                                            <div className='text-xl'>
                                                Thành tiền:
                                            </div>
                                            <div>
                                                {arrOrderDetail && arrOrderDetail.length > 0 && formatPrice(arrOrderDetail[0]?.total_money)}₫
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default DetailOrder;