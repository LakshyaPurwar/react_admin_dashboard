import React from "react";
import './Single.scss';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import SimpleTable from "../../components/SimpleTable/SimpeTable";
function Single()
{
    return <div className="singlePage">
        <Sidebar></Sidebar>
        <div className="singleContainer">
            <Navbar></Navbar>
            <div className="singleBody">
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://st3.depositphotos.com/11585370/19184/i/600/depositphotos_191843146-stock-photo-skeptical-and-dissatisfied-young-brural.jpg" alt=""
                            className="itemImg" />

                            <div className="details">
                               <h1 className="itemTitle">John Doe</h1>

                               <div className="detailItem">
                                    <span className="itemKey">Email : </span>
                                    <span className="itemValue">doeJohn@dosasambhar.com</span>
                               </div>
                               <div className="detailItem">
                                    <span className="itemKey">Phone :  </span>
                                    <span className="itemValue">+91 8960 300 940</span>
                               </div>
                               <div className="detailItem">
                                    <span className="itemKey">Country : </span>
                                    <span className="itemValue">India</span>
                               </div>
                            </div>
                         </div>
                    </div>
                    <div className="right">
                        <Chart title='Latest Transactions ( Last 6 months )'  height={200 }></Chart>
                    </div>
                </div>
                <div className="bottom">
                    <div className="title">
                        Orders ( Last 6 months )
                    </div>
                    <SimpleTable></SimpleTable>
                </div>
            </div>
        </div>
    </div>;
}
export default Single;