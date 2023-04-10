import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";

import {
    FaEdit,
    FaRegWindowClose,
    FaTrashAlt
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"
import CommonUtils from '../../utils/CommonUtils';
import {
    authAddProduct,
    deleteProduct,
    editProduct,
    fetchBrand,
    fetchGender,
    getAllProduct
} from '../../store/actions';
import { CRUD_ACTIOND } from '../../utils/constant';

const ManageOrder = (props) => {

    return (
        <div>
            <div className="flex flex-col pb-10">
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
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
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
                                        props.arrProduct && props.arrProduct.length > 0 &&
                                        props.arrProduct.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                        {index}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        {item.name}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        {item.price}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800  text-left whitespace-nowrap">
                                                        <div
                                                            className='h-20 w-20 bg-cover'
                                                        // style={{ backgroundImage: `url(${imgabcd(item.image)})` }}
                                                        >

                                                        </div>
                                                        {/* {item.phoneNumber} */}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800  text-right whitespace-nowrap">
                                                        {item.brandId}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                        <div className='flex justify-end gap-3'>
                                                            <div className="text-green-500 hover:text-green-700 cursor-pointer text-xl">
                                                                <FaEdit
                                                                // onClick={() => handleEditProduct(item)}
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