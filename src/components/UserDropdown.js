import React from "react";
import { createPopper } from "@popperjs/core";
import { connect } from "react-redux";
import team from '../assets/img/team.jpg'
import { path } from '../utils/constant'

import {
  FaUser
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { authLogout } from "../store/actions/authAction";

const UserDropdown = (props) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end"
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleLogout = () => {
    props.authLogout()
  }

  return (
    <React.Fragment>
      <div
        className="block cursor-pointer"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={e => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm  bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            {/* <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={team}
            /> */}
            <FaUser
              size={'20px'} width={'24px'}
            />
          </span>
        </div>
      </div>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 border-t-[1px]"
        }
        style={{ minWidth: "12rem" }}
      >
        {
          props.role === 'R1' ?
            <Link
              to={path.SYSTEM}
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-red-400"
              }
            >
              Admin
            </Link>
            : ''
        }
        <Link
          to={path.SYSTEM}
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-red-400"
          }
        >
          Thông tin tài khoản
        </Link>
        <Link
          to={path.LISTORDER}
          className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-red-400"}
          onClick={() => {
            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
          }}
        >
          Đơn hàng đã mua
        </Link>

        <Link
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-red-400"
          }
          onClick={() => {
            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
          }}
        >
          Đổi mật khẩu
        </Link>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <Link
          to={path.HOME}
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-red-400"
          }
          onClick={() => {
            handleLogout()
            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
          }
          }
        >
          Đăng xuất
        </Link>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLoggedIn,
    role: state.auth.role
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // authLogin: (email, password) => dispatch(authLogin(email, password))
    authLogout: () => dispatch(authLogout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
