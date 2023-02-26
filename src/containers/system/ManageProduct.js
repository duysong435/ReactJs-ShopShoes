import React, { useState } from 'react'
import { connect } from "react-redux";
import { handleLogin } from '../../store/actions';

import { FaEdit, FaTrashAlt } from "react-icons/fa";

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
                            <h3 className="text-base font-semibold leading-6 px-2 text-gray-900">Quản lý người dùng</h3>
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
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-gray-300 shadow-sm 
                                                focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={user.email}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-gray-300 shadow-sm 
                                                focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-gray-300 shadow-sm 
                                                focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-gray-300 shadow-sm 
                                                focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-gray-300 shadow-sm 
                                                focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                id="phoneNumber"
                                                className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-gray-300 shadow-sm 
                                                focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                                Gender
                                            </label>
                                            <select
                                                id="gender"
                                                name="dender"
                                                className="mt-1 block w-full  rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm 
                                                focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                <option>Famale</option>
                                                <option>Male</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                                Role
                                            </label>
                                            <select
                                                id="role"
                                                name="role"
                                                className="mt-1 block w-full  rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm 
                                                focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                <option>Admin</option>
                                                <option>User</option>
                                            </select>
                                        </div>

                                        <div className='flex flex-col col-span-6'>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Photo</label>
                                                <div className="mt-1 flex items-center">
                                                    <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                        </svg>
                                                    </span>
                                                    <button
                                                        type="button"
                                                        className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm 
                                                        hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        Change
                                                    </button>
                                                </div>
                                            </div>

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

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>

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
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Phone Number
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Address
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Action
                                        </th>
                                        {/* <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Delete
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                            1
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Jone Doe
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            jonne62@gmail.com
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800  text-left whitespace-nowrap">
                                            0123456789
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800  text-right whitespace-nowrap">
                                            Ha Noi
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <div className='flex justify-end gap-3'>
                                                <div className="text-green-500 hover:text-green-700 cursor-pointer text-xl">
                                                    <FaEdit />
                                                </div>
                                                <div className="text-red-500 hover:text-red-700 cursor-pointer text-xl">
                                                    <FaTrashAlt />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(handleLogin(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct);