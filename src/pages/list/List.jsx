import React from "react";
import './list.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/Datatable/Datatable";
import { Link } from "react-router-dom";
function List()
{
    return <div className="list">
        <div className="sidebarContainer">
        <Sidebar></Sidebar>
        </div>
        
        <div className="listContainer">
           <Navbar></Navbar>
           <div className="listBody">
            <div className="title">
                <span className="subTitle">
                Add New User
                </span>
                
                <Link to='/users/new' className="link addNewButton">
                    Add New
                </Link>
            </div>
            <Datatable></Datatable>
           </div>
        </div>
    </div>;
}
export default List;