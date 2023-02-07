import React from "react";
import './list.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/Datatable/Datatable";
function List()
{
    return <div className="list">
        <div className="sidebarContainer">
        <Sidebar></Sidebar>
        </div>
        
        <div className="listContainer">
           <Navbar></Navbar>
           <div className="listBody">
            <Datatable></Datatable>
           </div>
        </div>
    </div>;
}
export default List;