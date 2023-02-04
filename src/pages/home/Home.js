import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import './home.scss';
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
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
                    <Chart />
                    
                </div>
            </div>
        </div>
    );
}
export default Home;