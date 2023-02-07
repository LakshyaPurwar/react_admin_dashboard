import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import './home.scss';
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import SimpleTable from "../../components/SimpleTable/SimpeTable";

function Home()
{
    return (
        <div className="home">
            <Sidebar/>
            <div className="home-container">
                <Navbar/>
                <div className="widgets">
                    <Widget title="users" growth="positive"/>
                    <Widget title="orders" growth='negative'/>
                    <Widget title="earnings"growth='negative'/>
                    <Widget title="balance"growth='negative'/>
                </div>

                <div className="charts">
                    <Featured />
                    <Chart title='Last 6 month revenue' height={300} />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <SimpleTable></SimpleTable>
                </div>
            </div>
        </div>
    );
}
export default Home;