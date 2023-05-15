import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";

import {
    FaEdit,
    FaRegWindowClose,
    FaTrashAlt
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"
import { FcViewDetails } from "react-icons/fc";
import CommonUtils from '../../utils/CommonUtils';
import {
    authAddProduct,
    deleteProduct,
    editProduct,
    fetchBrand,
    fetchGender,
    getAllProduct
} from '../../store/actions';
import { getAdminListOrderService, updateAdminStatusOrderService } from '../../services/orderService';
import { toast } from 'react-toastify';
import { formatDate, formatPrice } from '../../utils/Format';
import { isPaid, payment } from '../../utils/constant';
import { Outlet, useNavigate } from 'react-router-dom';

const ManageOrder = (props) => {
    const navigate = useNavigate()


    const [arrListOrder, setArrListOrder] = useState([])

    const getListOrder = async () => {
        const response = await getAdminListOrderService()
        if (response && response.errCode === 0) {
            setArrListOrder(response?.response)
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

    const handleStatusOrder = async (id, status) => {
        if (status === 'S1') {
            const response = await updateAdminStatusOrderService(id, 'S2')
            console.log('jiupad', response)
            setTimeout(() => {
                getListOrder()

            }, 2000)

        } else {
            const response = await updateAdminStatusOrderService(id, 'S3')
            console.log('jiupad', response)
            setTimeout(() => {
                getListOrder()
            }, 2000)
        }
    }

    useEffect(() => {
        getListOrder()
    }, [])
    console.log(arrListOrder)

    return (
        <div>
            <div className="flex flex-col pb-10 snap-y">
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
                                            STT
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Thông tin khách hàng
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Thông tin đơn hàng
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Thông tin thanh toán
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                                        >
                                            Trạng thái
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Thao tác
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        arrListOrder && arrListOrder.length > 0 &&
                                        arrListOrder.map((item, index) => {
                                            return (
                                                <tr key={item?.id}>
                                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                        {index}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        <div className='flex gap-1'>
                                                            <span className='font-semibold'>Tên:</span>
                                                            <span>{item?.User?.firstName + ' ' + item?.User?.lastName}</span>
                                                        </div>
                                                        <div className='flex gap-1'>
                                                            <span className='font-semibold'>Email:</span>
                                                            <span>{item?.User?.email}</span>
                                                        </div>
                                                        <div>
                                                            <span className='font-semibold'>SĐT:</span>
                                                            <span>{item?.User?.phone_number}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        <div className='flex gap-1'>
                                                            <span className='font-semibold'>Tổng tiền:</span>
                                                            <span>{formatPrice(item?.total_money)}₫</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800  text-left whitespace-nowrap">
                                                        <div
                                                            className='flex gap-1'
                                                        >
                                                            <span className='font-semibold'>Phương thức thanh toán:</span>
                                                            <span>{item?.payment_method === 'CASH' ? 'Tiền mặt' : payment.PAYPAL}</span>
                                                        </div>
                                                        <div className='flex gap-1'>
                                                            <span className='font-semibold'>Tình trạng:</span>
                                                            <span>{item?.is_paid ? isPaid.PAID : isPaid.UNPAID}</span>
                                                        </div>
                                                        {
                                                            item?.is_paid ?
                                                                <div className='flex gap-1'>
                                                                    <span className='font-semibold'>Ngày thanh toán:</span>
                                                                    <span>{formatDate(item?.paidAt)}</span>
                                                                </div>
                                                                : <></>
                                                        }
                                                    </td>
                                                    <td className="px-6 py-3 text-sm text-gray-800  text-right whitespace-nowrap">
                                                        <div className='flex  flex-col'>
                                                            <span className='text-center'>{item?.Allcode?.valueVi}</span>
                                                            {
                                                                item?.Allcode?.keyMap !== 'S3' &&
                                                                <button className='py-1 bg-yellow-200 '
                                                                    onClick={() => { handleStatusOrder(item?.id, item?.Allcode?.keyMap) }}
                                                                >
                                                                    {item?.Allcode?.keyMap === 'S1' ? 'Xác nhận đơn' : 'Xác nhận hàng'}
                                                                </button>
                                                            }
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                        <div className='flex justify-end gap-3'>
                                                            <div className="text-green-500 hover:text-green-700 cursor-pointer text-xl">
                                                                <FcViewDetails
                                                                    // onClick={() => handleEditProduct(item)}
                                                                    onClick={() => navigate(`${item.id}`)}
                                                                />
                                                            </div>
                                                            <div className="text-red-500 hover:text-red-700 cursor-pointer text-xl">
                                                                <FaTrashAlt onClick={() => {
                                                                    // handleDeleteProduct(item.id)
                                                                }}
                                                                />
                                                            </div>
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
            </div>
            <Outlet />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // arrProduct: state.auth.arrProduct,
        // arrBrand: state.auth.arrBrand,
        // arrGender: state.auth.arrGender
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // authGetAllProduct: () => dispatch(getAllProduct()),
        // fetchBrand: () => dispatch(fetchBrand()),
        // fetchGender: () => dispatch(fetchGender()),
        // editProduct: (data) => dispatch(editProduct(data)),
        // deleteProduct: (id) => dispatch(deleteProduct(id)),
        // authAddProduct: (product) => dispatch(authAddProduct(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrder);