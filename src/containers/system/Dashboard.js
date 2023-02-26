import React, { useState } from 'react'
import { connect } from "react-redux";
import Sidebar from '../../components/Sidebar';
import { handleLogin } from '../../store/actions';
import ManageProduct from './ManageProduct';

const ManageUser = (props) => {


    console.log("isLoggin: ", props.isLogin)
    return (
        <React.Fragment>
            <Sidebar />
            <ManageProduct />
            <div className='bg-red-200 w-full h-[100vh]'>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(handleLogin(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUser);