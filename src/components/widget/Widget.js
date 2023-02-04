import React from "react";
import './Widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
function Widget(props)
{
    let title  = props.title;
    let growth = props.growth;
    let data;
    const amount = 100;
    const per = 20;
    switch(title)
    {
        case "users":
            data = {
                title:"USERS",
                isMoney:false,
                link : "See all users",
                icon : <PersonOutlineOutlinedIcon className="icon icon-crimson"/>,
            };
            break;

            case "orders":
            data = {
                title:"ORDERS",
                isMoney:false,
                link : "See all orders",
                icon : <ShoppingCartOutlinedIcon className="icon icon-yellow"/>,
            };
            break;

            case "earnings":
            data = {
                title:"EARNINGS",
                isMoney:true,
                link : "See net earning",
                icon : <CurrencyRupeeOutlinedIcon className="icon icon-green"/>,
            };
            break;

            case "balance":
            data = {
                title:"BALANCE",
                isMoney:true,
                link : "See details ",
                icon : <AccountBalanceOutlinedIcon className="icon icon-purple"/>,
            };
            break;
            default:
                break;

            
    }

    let arrow = growth == 'positive'?<KeyboardArrowUpOutlinedIcon className='icon' />:<KeyboardArrowDownOutlinedIcon className='icon' />
    
    return <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "Rs."}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className={`percentage ${growth}`}>
                {arrow}
                <span>{per}%</span>
            </div>
            {data.icon}

        </div>
    </div>
}
export default Widget;