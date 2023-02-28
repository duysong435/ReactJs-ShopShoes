import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import Sidebar from '../../components/Sidebar';
import ManageProduct from './ManageProduct';
import ManageUser from './ManageUser';

const arrList = ['ManageUser', 'ManageProduct', 'Orders']

const Dashboard = (props) => {
    const [tab, setTab] = useState('ManageUser')

    const handleChangeTab = (data) => {
        for (let i = 0; i < arrList.length; i++)
            if (arrList[i] === data) {
                // alert(data)
                setTab(data)
                // console.log(tab)
            }
        // alert(data)
    }

    // console.log("isLoggin: ", props.isLogin)
    return (
        <React.Fragment>
            <Sidebar
                onChangeTab={handleChangeTab}
            />
            <div className='relative md:ml-64  h-[100vh]'>
                {
                    'ManageUser' === tab ? <ManageUser /> : <ManageProduct />
                }
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