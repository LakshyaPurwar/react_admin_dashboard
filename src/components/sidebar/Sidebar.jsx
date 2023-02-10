import React from "react";
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { useDispatch }from 'react-redux';
import { themeActions } from "../../store/themeSlice";


function Sidebar()
{

    // const incrementHandler = ()=>{
    //     dispatch(counterActions.increment());
    //   }

    const dispatch = useDispatch();
    const lightThemeClickHandler = ()=>{
        dispatch(themeActions.turnLight());

    };

    const darkThemeClickHandler = ()=>{
        dispatch(themeActions.turnDark());
    }



    return <div className="sidebar">
        <div className="top">
            <div className="logo">    <Link  className="link" to='/'> Adminoo</Link></div>
        </div>
        <hr />
        <div className="middle">
            <ul className='lists'>
                <p>MAIN</p>
                <li><Link className="link" to='/'><DashboardIcon className="icon"/><span>Dashboard</span></Link></li>

                <p>LISTS</p>

                <li>
                    <Link className="link" to='/users'>
                    <PersonIcon className="icon"/><span>Users</span>
                    </Link>
                </li>

                <li>
                    <Link className="link" to='/products'>
                        <Inventory2Icon className="icon"/><span>Products</span>
                    </Link>
                    
                </li>

                <li>
                    <Link  className='link' to='/orders'>
                    <ListAltIcon className="icon"/><span>Orders</span>
                    </Link>
                   
                </li>

                <li>
                    <Link className='link' to='#'>
                        <LocalShippingIcon className="icon"/><span>Delivery</span>
                    </Link>
                    
                </li>

                <p>USEFUL</p>
                <li><QueryStatsIcon className="icon"/><span>Stats</span></li>
                <li><NotificationsActiveIcon className="icon"/><span>Notifications</span></li>
                <li><HealthAndSafetyIcon className="icon"/><span>System Health</span></li>
                <li><BookIcon className="icon"/><span>Logs</span></li>
                <li><SettingsIcon className="icon"/><span>Settings</span></li>

                <p>USER</p>
                <li><PersonIcon className="icon"/><span>Profile</span></li>
                <li><LogoutIcon className="icon"/><span>Logout</span></li>
            </ul>
        </div>


        <div className="bottom">
            <div className="colorOption lightTheme" onClick={lightThemeClickHandler}></div>
            <div className="colorOption darkTheme" onClick={darkThemeClickHandler}></div>
            {/* <div className="colorOption"></div> */}
        </div>

    </div>
}
export default Sidebar;