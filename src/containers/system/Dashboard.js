import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import {
    Outlet,
    useNavigate
} from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { path } from '../../utils/constant';
import ManageProduct from './ManageProduct';
import ManageUser from './ManageUser';

const arrList = ['ManageUser', 'ManageProduct', 'Orders']

const Dashboard = (props) => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate(path.MANAGER_USER)
    }, [])

    return (
        <React.Fragment>
            <Sidebar />
            <div className='relative md:ml-64  h-[100vh]'>
                <Outlet />
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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);