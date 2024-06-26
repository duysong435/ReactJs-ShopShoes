import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaTv
} from "react-icons/fa";

import {
  BsFillPeopleFill
} from "react-icons/bs";

import {
  GiConverseShoe
} from "react-icons/gi";

import {
  IoIosListBox
} from "react-icons/io";


// import NotificationDropdown from "./NotificationDropdown.js";
import UserDropdown from "./UserDropdown.js";
import { path } from "../utils/constant.js";

import './Sidebar.scss'

const listManager = [
  {
    path: path.MANAGER_USER,
    name: 'Quản lý người dùng',
    nameIcon: <BsFillPeopleFill />
  },

  {
    path: path.MANAGER_PRODUCT,
    name: 'Quản lý sản phẩm',
    nameIcon: <GiConverseShoe />
  },

  {
    path: path.MANAGER_ORDER,
    name: 'Quản lý đơn hàng',
    nameIcon: <IoIosListBox />

  },

]


export default function Sidebar(props) {
  const [collapseShow, setCollapseShow] = useState("hidden");
  

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <FaBars />
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-black-text mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Bảng quản lý
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            {/* <li className="inline-block relative">
              <NotificationDropdown />
            </li> */}
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blue-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-black-text mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Bảng quản lý
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-blue-500 placeholder-blue-300 text-blueGray bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {
                listManager.map((item, index) => {
                  return (
                    <li key={index} className="items-center">
                      <div
                        className="flex text-blueGray hover:text-red-400 text-xs uppercase py-3 font-bold gap-2 "
                      >
                        <div className="text-xl">
                          {item.nameIcon}
                        </div>
                        <NavLink
                          className='cursor-pointer'
                          to={item.path}
                        >
                          {item.name}
                        </NavLink>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Tài khoản
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <Link
                  className="text-blueGray hover:text-red-400 text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fas fa-paint-brush mr-2 text-blueGray text-base"></i> Đổi mật khẩu
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-blueGray hover:text-red-400 text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fab fa-css3-alt mr-2 text-blueGray text-base"></i> Thêm tài khoản
                </Link>
              </li>
              <li className="inline-flex">
                <Link
                  className="text-blueGray hover:text-red-400  text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fab fa-react mr-2 text-blueGray text-base"></i> Đăng xuất
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
