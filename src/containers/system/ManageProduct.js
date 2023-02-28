import React, { useState } from 'react'
import { connect } from "react-redux";

import {
    FaEdit,
    FaTrashAlt
} from "react-icons/fa";

const ManageProduct = (props) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        gender: '',
        roleId: '',
        image: '',
        phoneNumber: ''
    })


    return (
        <div className='ml-2'>
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-1 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-xl font-semibold leading-6 px-2 text-gray-900">Quản lý sản phẩm</h3>
                            {/* <p className="mt-1 text-sm text-gray-600"></p> */}
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Tên sản phẩm
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                                Giá sản phẩm
                                            </label>
                                            <input
                                                type="text"
                                                name="price"
                                                id="price"
                                                className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-gray-300 shadow-sm 
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className='col-span-6 '>
                                            <label htmlFor='detail' className="block text-sm font-medium text-gray-700">
                                                Mô tả sản phẩm
                                            </label>
                                            <textarea className='mt-1  w-full focus:outline px-2 py-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                                id='detail'
                                                name='detail'
                                                rows="5"
                                            ></textarea>

                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                                                Thương hiệu
                                            </label>
                                            <select
                                                id="brand"
                                                name="brand"
                                                className="mt-1 block w-full  rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm 
                                            focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                <option>Nike</option>
                                                <option>Male</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                                Sản phẩm dành cho
                                            </label>
                                            <select
                                                id="role"
                                                name="role"
                                                className="mt-1 block w-full  rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm 
                                            focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                <option>Nam</option>
                                                <option>Nữ</option>
                                            </select>
                                        </div>

                                        <div className='flex flex-col col-span-6'>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mt-2">Cover photo</label>
                                                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                    <div className="space-y-1 text-center">
                                                        <svg
                                                            className="mx-auto h-12 w-12 text-gray-400"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            viewBox="0 0 48 48"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <div className="flex text-sm text-gray-600">
                                                            <label
                                                                htmlFor="file-upload"
                                                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 
                                                            focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                            >
                                                                <span>Upload div file</span>
                                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm
                                     hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct);