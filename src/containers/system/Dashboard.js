import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import {
    Outlet,
    useNavigate
} from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { path } from '../../utils/constant';

const Dashboard = (props) => {
    const navigate = useNavigate()
    const { isLoggedIn, role } = useSelector(state => state.auth)

    useEffect(() => {
        if (!isLoggedIn || role !== 'R1') {
            navigate(path.HOME)
        } else {
            navigate(path.MANAGER_USER)
        }
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

export default Dashboard;