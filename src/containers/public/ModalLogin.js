import React, { useState } from 'react'
import { connect } from "react-redux";
import { FaWindowClose } from "react-icons/fa";
import { authLogin, getCountCart } from '../../store/actions';
import { Link, useNavigate } from 'react-router-dom';
import { path } from '../../utils/constant';

const ModalLogin = (props) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('123456');

  const handleShowModal = () => {
    props.onShowModal(false)
  }

  const handleLoginModal = async () => {
    try {
      await props.login(email, password)
      handleShowModal();

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <React.Fragment>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto 
          fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-[40%] my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold ">
                Đăng nhập
              </h3>
              <button
                className="p-1 ml-auto  border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => handleShowModal()}
              >
                <span className="bg-transparent text-red-600  h-7 w-8 text-2xl block ">
                  <FaWindowClose />
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className='flex flex-col'>
                <label htmlFor='email' className='w-full'>Địa chỉ email:</label>
                <input id='email' type={'text'} placeholder='exam@gmail.com'
                  className='h-8 px-1 border-[1px] rounded-md outline-none'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='password' className='w-full'>Mật khẩu:</label>
                <input id='password' type={'password'}
                  className='h-8 px-1 border-[1px] rounded-md outline-none'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 pb-2 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => navigate(path.HOME)}
              >
                Đóng
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  handleLoginModal()
                  navigate(path.HOME)
                  // setTimeout(() => {
                  //   props.coutCart(props.idUser)
                  // }, 2000)
                }}
              >
                Đăng Nhập
              </button>
            </div>
            <div className='text-right mr-6 my-2'>
              <span>
                Bạn chưa có tài khoản
                <Link to={path.REGISTER}
                  className='text-blue-500 px-1'
                  onClick={() => handleShowModal()}
                >
                  Đăng ký?
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    idUser: state.auth.idUser,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(authLogin(email, password)),
    // coutCart: (data) => dispatch(getCountCart(data))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);