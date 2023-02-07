import React from "react";
import './new.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function New()
{
    return <div className="new">
        <Sidebar></Sidebar>
        <div className="newContainer">
            <Navbar></Navbar>
            <div className="newBody">
                <div className="top">
                    <h1 className="title">Add New User</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src="https://www.shutterstock.com/image-vector/not-available-grunge-rubber-stamp-260nw-549465907.jpg" alt="" className="userImage" />
                    </div>
                    <div className="right">Right</div>
                </div>
            </div>
        </div>
        
    </div>;
}
export default New;