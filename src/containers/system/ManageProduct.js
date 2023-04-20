import React, { useEffect, useState } from 'react'
import { Buffer } from 'buffer';
import { connect } from "react-redux";

import {
    FaEdit,
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
import { convertImg } from '../../utils/Convert';

const ManageProduct = (props) => {
    const [product, setProduct] = useState({
        name: '',
        title: '',
        price: '',
        description: '',
        brand_id: '',
        image: '',
    })

    const [img, setImg] = useState({
        previewImgUrl: '',
        isOpen: false
    })

    const [actionUser, setActionUser] = useState(CRUD_ACTIOND.CREATE)
    const [arrPageNumber, setArrPageNumber] = useState([]);
    const [active, setActive] = useState(0)


    const handleEditProduct = (product) => {
        console.log(product)

        let imageBase64 = ''
        if (product.image) {
            imageBase64 = new Buffer(product.image, 'base64').toString('binary')
        }
        setProduct({
            id: product.id,
            name: product.name,
            title: product.title,
            price: product.price,
            description: product.description,
            brand_id: product.brand_id,
            image: imageBase64


        })
        setImg({ ...img, previewImgUrl: imageBase64 })
        setActionUser(CRUD_ACTIOND.EDIT)
    }


    const handleAddProduct = async () => {

        if (actionUser === CRUD_ACTIOND.CREATE) {
            props.authAddProduct(product)

        }
        if (actionUser === CRUD_ACTIOND.EDIT) {
            await props.editProduct(product)
        }
        setProduct({
            name: '',
            title: '',
            price: '',
            description: '',
            brand_id: '',
        })
        setImg({
            previewImgUrl: '',
            isOpen: false
        })
        setActionUser(CRUD_ACTIOND.CREATE)
        setTimeout(() => {
            props.authGetAllProduct()
        }, 2000);

    }

    const handleOnChangeImage = async (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file)
            let objectUrl = URL.createObjectURL(file)
            setProduct({ ...product, image: base64 })
            setImg({ ...img, previewImgUrl: objectUrl })
        }
    }

    const handleOpenModalPreview = () => {
        setImg({ ...img, isOpen: !img.isOpen })
    }

    const handleDeleteProduct = async (id) => {
        await props.deleteProduct(id)
        setTimeout(() => {
            props.authGetAllProduct()
        }, 2000);
    }

    // const imgabcd = (base64) => {
    //     const imageBase64 = new Buffer(base64, 'base64').toString('binary')
    //     return imageBase64
    // }

    const pageNumber = () => {
        let arrCount = []
        if (!props.countProduct) {

        } else {
            const a = (props.countProduct - (props.countProduct % 8)) / 8
            for (let i = 0; i <= a; i++) {
                arrCount.push(i)
            }
            setArrPageNumber(arrCount)
        }
    }

    const handlePaginationUser = (value) => {
        const data = { offset: value }
        props.authGetAllProduct(data)
        setActive(value)
    }

    useEffect(() => {
        return () => {
            img && URL.revokeObjectURL(img.previewImgUrl)
        }
    }, [img])

    useEffect(() => {
        props.authGetAllProduct()
        props.fetchBrand()
        setTimeout(() => {
            pageNumber()
        }, 3000)
    }, [])

    useEffect(() => {
        pageNumber()
    }, [props.countProduct])

    console.log(product)
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
                                                value={product.name}
                                                onChange={(e) => setProduct({ ...product, name: e.target.value })}
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
                                                className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={product.price}
                                                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Tiêu đề sản phẩm
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={product.title}
                                                onChange={(e) => setProduct({ ...product, title: e.target.value })}
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
                                                value={product.description}
                                                onChange={(e) => setProduct({ ...product, description: e.target.value })}
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
                                                value={product.brand_id}
                                                onChange={(e) => setProduct({ ...product, brand_id: e.target.value })}
                                            >
                                                {
                                                    props.arrBrand && props.arrBrand.length > 0 &&
                                                    props.arrBrand.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.keyMap}>{item.valueVi}</option>

                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        {/* <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                                Sản phẩm dành cho
                                            </label>
                                            <select
                                                id="gender"
                                                name="gender"
                                                className="mt-1 block w-full  rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm 
                                            focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                value={product.genderId}
                                                onChange={(e) => setProduct({ ...product, genderId: e.target.value })}
                                            >
                                                {
                                                    props.arrGender && props.arrGender.length > 0 &&
                                                    props.arrGender.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.keyMap}>
                                                                {item.valueVi}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div> */}

                                        <div className='flex flex-col col-span-6'>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mt-2 mb-3">Ảnh sản phẩm</label>
                                                <span className=" rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm 
                                                    hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                    <label htmlFor="file-upload"
                                                        className='cursor-pointer p-2'
                                                    >
                                                        {actionUser === CRUD_ACTIOND.EDIT ? 'Thay ảnh sản phẩm' : 'Thêm ảnh sản phẩm'}
                                                    </label>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only"
                                                        onChange={(e) => handleOnChangeImage(e)} />
                                                </span>
                                                <div className="mt-3 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
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
                                        onClick={() => handleAddProduct()}
                                    >
                                        {actionUser === CRUD_ACTIOND.EDIT ? 'Lưu thay đổi' : 'Tạo mới'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

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
                                            Tên sản phẩm
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Giá sản phẩm
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Hình ảnh
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Thương hiệu
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
                                                            style={{ backgroundImage: `url(${convertImg(item.image)})` }}>

                                                        </div>
                                                        {/* {item.phoneNumber} */}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800  text-right whitespace-nowrap">
                                                        {item.brand_id}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                        <div className='flex justify-end gap-3'>
                                                            <div className="text-green-500 hover:text-green-700 cursor-pointer text-xl">
                                                                <FaEdit
                                                                    onClick={() => handleEditProduct(item)}
                                                                />
                                                            </div>
                                                            <div className="text-red-500 hover:text-red-700 cursor-pointer text-xl">
                                                                <FaTrashAlt onClick={() => {
                                                                    handleDeleteProduct(item.id)
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
            {/* Page number start */}
            <div className="flex justify-center">
                <nav aria-label="Page navigation example">
                    <ul className="list-none flex gap-1">
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
                    </ul>
                </nav>
            </div>
            <div className='h-3'></div>
            {/* Page number end */}

            {/* Modal preview */}
            {
                img.isOpen === true ?
                    <>
                        <div
                            className="  flex h-[100vh] w-[99vw] overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative  w-[100%] my-2 mx-2 ">
                                {/*content*/}
                                <div className="border-0  shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
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

const mapStateToProps = (state) => {
    return {
        arrProduct: state.auth.arrProduct,
        arrBrand: state.auth.arrBrand,
        arrGender: state.auth.arrGender,
        countProduct: state.auth.countProduct
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        authGetAllProduct: (data) => dispatch(getAllProduct(data)),
        fetchBrand: () => dispatch(fetchBrand()),
        fetchGender: () => dispatch(fetchGender()),
        editProduct: (data) => dispatch(editProduct(data)),
        deleteProduct: (id) => dispatch(deleteProduct(id)),
        authAddProduct: (product) => dispatch(authAddProduct(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct);