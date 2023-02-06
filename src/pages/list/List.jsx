import React from "react";
import './list.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
function List()
{
    return <div className="list">
        <div className="sidebarContainer">
        <Sidebar></Sidebar>
        </div>
        
        <div className="listContainer">
           <Navbar></Navbar>
           <div className="listBody">This is the list body</div>
        </div>
    </div>;
}
export default List;