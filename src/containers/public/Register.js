import React, { useState } from 'react'
import { connect } from "react-redux";
// import { FaWindowClose } from "react-icons/fa";
import { authRegister } from '../../store/actions';
import {
    Link,
    useNavigate
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Register = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',
        rePassword: '',
        firstName: '',
        lastName: '',
    });



    const handleRegister = async () => {
        try {
            await props.register(user)
            if (await props.errCode === 0) {
                setUser({
                    email: '',
                    password: '',
                    rePassword: '',
                    firstName: '',
                    lastName: '',
                })
            }
            // navigate('/')
            // alert(await     props.errMessage)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <React.Fragment>
            <Header />
            <div className=" ">
                <div className=" w-[40%] my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold ">
                                Đăng ký tài khoản
                            </h3>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        Họ
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-[1px] outline-none
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        value={user.firstName}
                                        onChange={(e) => {
                                            setUser({ ...user, firstName: e.target.value })
                                        }}
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Tên
                                    </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-[1px] outline-none
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        value={user.lastName}
                                        onChange={(e) => {
                                            setUser({ ...user, lastName: e.target.value })
                                        }}
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-[1px] outline-none
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        value={user.email}
                                        onChange={(e) => {
                                            setUser({ ...user, email: e.target.value })
                                        }}
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Mật khẩu
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-[1px] outline-none
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        value={user.password}
                                        onChange={(e) => {
                                            setUser({ ...user, password: e.target.value })
                                        }}
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="rePassword" className="block text-sm font-medium text-gray-700">
                                        Nhập lại mật khẩu
                                    </label>
                                    <input
                                        type="password"
                                        name="rePassword"
                                        id="rePassword"
                                        className="mt-1 block w-full h-8 focus:outline px-2 rounded-md border-[1px] outline-none
                                            focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        value={user.rePassword}
                                        onChange={(e) => {
                                            setUser({ ...user, rePassword: e.target.value })
                                        }}
                                    />
                                    {
                                        user.password !== user.rePassword ?
                                            <span className='text-red-600 text-xs'>Mật khẩu không khớp</span> : ''
                                    }
                                </div>
                            </div>

                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 pb-2 border-t border-solid border-slate-200 rounded-b">
                            <div className='text-right mr-6 my-2'>
                                <span><Link className='text-blue-500 px-1'>Quay lại đăng nhập</Link></span>
                            </div>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => handleRegister()}
                            >
                                Đăng ký
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        errMessage: state.auth.errMessage,
        errCode: state.auth.errCode
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (user) => dispatch(authRegister(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);