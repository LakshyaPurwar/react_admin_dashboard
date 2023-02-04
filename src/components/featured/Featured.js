import React from "react";
import './featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function Featured() {

   let up = <KeyboardArrowUpOutlinedIcon className="icon"/>;
   let down = <KeyboardArrowDownOutlinedIcon className="icon"/>;


    return <div className="featured">
        <div className="top">
            <p className="heading">TOTAL REVENUE</p>
            <MoreVertOutlinedIcon className="icon" />

        </div>
        <div className="bottom">
            <CircularProgressbar className='circularProgress' value={70} text={`70%`} />
            <p className="title">Total Sales made today</p>
            <p className="amount">Rs.420</p>
            <p className="desc">Previous transactions processing.Last payment may not be included.</p>

            <div className="summary">

                <div className="item">
                    <div className="item-title">Target </div>
                    <div className= "item-result positive">
                            {up}
                            <span className="result-value">
                                Rs.675
                            </span>

                    </div>
                </div>

                <div className="item">
                    <div className="item-title">Yesterday</div>
                    <div className= "item-result negative">
                            {down}
                            <span className="result-value">
                                Rs.675
                            </span>

                    </div>
                </div>

                <div className="item">
                    <div className="item-title">Last Week</div>
                    <div className= "item-result positive">
                            {up}
                            <span className="result-value">
                                Rs.675
                            </span>

                    </div>
                </div>
            </div>
        </div>

    </div>
}
export default Featured;