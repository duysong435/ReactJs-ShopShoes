import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Buffer } from 'buffer';
import { CRUD_ACTIOND } from '../../utils/constant';
import {
    authRegister,
    editUser,
    fetchGender,
    fetchRole,
    getAllUser,
} from '../../store/actions';

import {
    FaEdit,
    FaTrashAlt
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"
import {
    deleteUserService
} from '../../services/userServices';
import { toast } from 'react-toastify';
import CommonUtils from '../../utils/CommonUtils';
import { useSearchParams } from 'react-router-dom';

const ManageUser = (props) => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const { arrUser, arrGender, arrRole, countUser } = useSelector(state => state.auth)


    const [user, setUser] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        gender: 'M',
        roleId: 'R2',
        image: '',
        phoneNumber: ''
    })

    const [img, setImg] = useState({
        previewImgUrl: '',
        isOpen: false
    })
    const [actionUser, setActionUser] = useState(CRUD_ACTIOND.CREATE)
    const [arrPageNumber, setArrPageNumber] = useState([]);
    const [active, setActive] = useState(0)

    const handleAddUser = () => {

        if (actionUser === CRUD_ACTIOND.CREATE) {
            dispatch(authRegister(user))
        }
        if (actionUser === CRUD_ACTIOND.EDIT) {
            dispatch(editUser(user))
        }
        setActionUser(CRUD_ACTIOND.CREATE)
    }

    const handleDeleteUser = async (id) => {
        const respone = await deleteUserService(id)
        if (respone && respone?.errCode === 0) {
            toast.success('Register success!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            dispatch(getAllUser())

        }
    }

    const handleEditUser = (user) => {
        let imageBase64 = ''
        if (user.image) {
            imageBase64 = new Buffer(user.image, 'base64').toString('binary')
        }
        setUser({
            id: user.id,
            email: user.email,
            password: 'HassPassword',
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            roleId: user.roleId,
            image: imageBase64


        })
        setImg({ ...img, previewImgUrl: imageBase64 })
        setActionUser(CRUD_ACTIOND.EDIT)
        dispatch(getAllUser())
    }

    const handleOnChangeImage = async (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file)
            let objectUrl = URL.createObjectURL(file)
            setUser({ ...user, image: base64 })
            setImg({ ...img, previewImgUrl: objectUrl })
        }
    }
    const handleOpenModalPreview = () => {
        setImg({ ...img, isOpen: !img.isOpen })
    }

    const handlePaginationUser = (value) => {
        const data = { offset: value }
        setActive(value)
        dispatch(getAllUser(data))
    }

    const pageNumber = () => {
        let arrCount = []
        if (!countUser) {

        } else {
            const a = (countUser - (countUser % 8)) / 8
            for (let i = 0; i <= a; i++) {
                arrCount.push(i)
            }
            setArrPageNumber(arrCount)
        }
    }

    useEffect(() => {
        dispatch(getAllUser())
        dispatch(fetchGender())
        dispatch(fetchRole())
    }, [])

    useEffect(() => {
        pageNumber()
    }, [countUser])
    console.log(user)
    return (
        <div className='ml-2'>
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>
            {/* Form start */}
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-1 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-xl font-semibold leading-6 px-2 text-gray-900">Quản lý người dùng</h3>
                            {/* <p className="mt-1 text-sm text-gray-600"></p> */}
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form >
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-gray-300 shadow-sm 
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={user.email}
                                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                                disabled={actionUser === CRUD_ACTIOND.EDIT ? true : false}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-gray-300 shadow-sm 
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={user.password}
                                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                                disabled={actionUser === CRUD_ACTIOND.EDIT ? true : false}
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
                                                value={user.firstName}
                                                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
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
                                                value={user.lastName}
                                                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
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
                                                value={user.address}
                                                onChange={(e) => setUser({ ...user, address: e.target.value })}
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
                                                value={user.phoneNumber}
                                                onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
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
                                                value={user.gender}
                                                onChange={(e) => setUser({ ...user, gender: e.target.value })}
                                            >
                                                {
                                                    arrGender && arrGender.length > 0 &&
                                                    arrGender.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.keyMap}>
                                                                {item.valueVi}
                                                            </option>
                                                        )
                                                    })
                                                }

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
                                                value={user.roleId}
                                                onChange={(e) => setUser({ ...user, roleId: e.target.value })}
                                            >
                                                {
                                                    arrRole && arrRole.length > 0 &&
                                                    arrRole.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.keyMap}>
                                                                {item.valueVi}
                                                            </option>
                                                        )
                                                    })
                                                }
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
                                                    <span className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm 
                                                    hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                        <label htmlFor="file-upload">
                                                            Change
                                                        </label>
                                                        {/* <input id="file-upload" name="file-upload" type="file" className="sr-only"
                                                            onChange={(e) => handleOnChangeImage(e)} /> */}
                                                    </span>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mt-2">Cover photo</label>
                                                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                    {
                                                        img.previewImgUrl ?
                                                            <div className='space-y-1 '>
                                                                <div className='flex'>
                                                                    <div className='h-48 w-52 bg-cover cursor-pointer'
                                                                        style={{ backgroundImage: `url(${img.previewImgUrl})` }}
                                                                        onClick={() => handleOpenModalPreview()}
                                                                    >

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :
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
                                                                        <span>Upload file</span>
                                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only"
                                                                            onChange={(e) => handleOnChangeImage(e)}
                                                                        />
                                                                    </label>
                                                                    <p className="pl-1">or drag and drop</p>
                                                                </div>
                                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                            </div>
                                                    }
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm
                                     hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"

                                        onClick={() => handleAddUser()}
                                    >
                                        {actionUser === CRUD_ACTIOND.EDIT ? 'Lưu thay đổi' : 'Tạo mới'}
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
            {/* Form end */}
            {/* Table start */}
            <div className="flex flex-col pb-2">
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
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        arrUser && arrUser.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                        {index}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        {item.firstName}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        {item.email}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800  text-left whitespace-nowrap">
                                                        {item.phoneNumber}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800  text-right whitespace-nowrap">
                                                        {item.address}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                        <div className='flex justify-end gap-3'>
                                                            <div className="text-green-500 hover:text-green-700 cursor-pointer text-xl">
                                                                <FaEdit
                                                                    onClick={() => handleEditUser(item)}
                                                                />
                                                            </div>
                                                            <div className="text-red-500 hover:text-red-700 cursor-pointer text-xl">
                                                                <FaTrashAlt onClick={() => {
                                                                    handleDeleteUser(item.id)
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
            {/* Table end */}
            {/* Page number start */}
            <div className="flex justify-center">
                <nav aria-label="Page navigation example">
                    <ul className="list-none flex gap-1">
                        {/* <li>
                            <button
                                className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-200 bg-neutral-100 "

                            >Previous</button
                            >
                        </li> */}
                        {
                            arrPageNumber && arrPageNumber.length > 1 &&
                            arrPageNumber.map((item, index) => {
                                return (
                                    <li>
                                        <button
                                            className={`relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-200 bg-neutral-400 ${active === item ? 'bg-neutral-300' : ''}`}
                                            onClick={() => handlePaginationUser(item)}
                                        >
                                            {item}
                                        </button
                                        >
                                    </li>
                                )
                            })
                        }

                        {/* <li aria-current="page">
                            <button
                                className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-200 bg-neutral-100 "

                            >2</button
                            >
                        </li>
                        <li>
                            <button
                                className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-200 bg-neutral-100 "

                            >3</button
                            >
                        </li> */}
                        {/* <li>
                            <button
                                className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-200 bg-neutral-100 "

                            >Next</button
                            >
                        </li> */}
                    </ul>
                </nav>
            </div>
            <div className='h-3'></div>
            {/* Page number end */}
            {
                img.isOpen === true ?
                    <>
                        <div
                            className="  flex h-[100vh] w-[99vw] overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative  w-[100%] my-2 mx-2 ">
                                {/*content*/}
                                <div className="border-0  shadow-lg relative flex flex-col   outline-none focus:outline-none">
                                    <div className='flex justify-between'>
                                        <div className=''></div>
                                        <AiOutlineClose className='text-3xl cursor-pointer'
                                            onClick={() => handleOpenModalPreview()}
                                        />
                                    </div>
                                    <div className='h-[890px] '>
                                        <div className=' h-[90%] w-[50%] mx-auto  bg-contain bg-no-repeat'
                                            style={{
                                                backgroundImage: `url(${img.previewImgUrl})`,
                                            }}
                                        >

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                    : ''
            }
        </div >
    )
}

export default ManageUser;