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
function Sidebar()
{
    return <div className="sidebar">
        <div className="top">
            <div className="logo">Adminoo</div>
        </div>
        <hr />
        <div className="middle">
            <ul className='lists'>
                <p>MAIN</p>
                <li><DashboardIcon className="icon"/><span>Dashboard</span></li>

                <p>LISTS</p>
                <li><PersonIcon className="icon"/><span>Users</span></li>
                <li><Inventory2Icon className="icon"/><span>Products</span></li>
                <li><ListAltIcon className="icon"/><span>Orders</span></li>
                <li><LocalShippingIcon className="icon"/><span>Delivery</span></li>

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
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>

    </div>
}
export default Sidebar;