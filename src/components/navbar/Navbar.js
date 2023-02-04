import React from "react";
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import ListIcon from '@mui/icons-material/List';
function Navbar()
{
    return <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search ..."></input>
                <SearchIcon className="icon"/>
            </div>

            <div className="items">
                <div className="item">
                    <LanguageIcon className="icon"/ >
                    <span>English</span>
                </div>
                <div className="item">
                    <DarkModeIcon className="icon"/>
                </div>
                <div className="item">
                    <FullscreenExitIcon className="icon"/>
                </div>
                <div className="item">
                    <NotificationsIcon className="icon"/>
                    <div className="super">1</div>
                </div>
                <div className="item">
                    <ChatIcon className="icon"/>
                    <div className="super">2</div>
                </div>
                <div className="item">
                    <ListIcon/>
                </div>
                <div className="item">
                    <img  className="avatar" src="https://cdn.vox-cdn.com/thumbor/eqQnoAcFYfcaaSQQiNtJPbVvh9Y=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23846298/1399272630.jpg"/>
                
                </div>
            </div>
        </div>
    </div>
     
}
export default Navbar;
