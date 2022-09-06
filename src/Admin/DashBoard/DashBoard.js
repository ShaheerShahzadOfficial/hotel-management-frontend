import "./dashboard.css"
import React, { useEffect } from 'react'
import SideBar from "./SideBar/sideBar"
import { Typography } from '@mui/material';

import { Link } from "react-router-dom"
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useDispatch, useSelector } from "react-redux"


Chart.register(...registerables);


const DashBoard = () => {



    const dispatch = useDispatch()



    useEffect(() => {
       

    }, [dispatch])

    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["tomato"],
                hoverBackgroundColor: ["rgb(197, 72, 49)"],
                data: [0],
                borderWidth: 1,
                borderColor: ["black"]

            },
        ],
    };


    const doughnutState = {
        labels: ["Out of Stock", "InStock"],
        datasets: [
            {
                backgroundColor: ["cyan", "blue"],
                hoverBackgroundColor: ["darkcyan", "darkblue"],
                // products.length
                data: [],
            },
        ],
    };





    return (
        <div className="dashboard">
            <SideBar />
            <div className="dashboardContainer">
                <Typography component={"h1"}>DashBoard</Typography>
                <div className="dashboardSummary">
                    <div>
                        <p> Total Amount <br /> Rs {}  </p>
                    </div>
                    <div className="dashboardSummaryBox2">
                        <Link to={"/admin/rooms"}>
                            <p>Rooms</p>
                            {/* Product Count */}
                            <p>{}</p>
                        </Link>

                        <Link to={"/admin/booking"}>
                            <p>Booking</p>
                            {/* Orders Count */}
                            <p>{}</p>
                        </Link>

                        <Link to={"/admin/AllUsers"}>
                            <p>Users</p>
                            {/* Users Count */}
                            <p>{}</p>
                        </Link>
                    </div>
                </div>

                {/* <div className="lineChart">
                    <Line
                        data={lineState} />
                </div> */}

                <div className="lineChart">
                    <Line data={lineState}>

                    </Line>
                </div>

                <div className="doughnutChart">
                    <Doughnut data={doughnutState} />
                </div>

            </div>
        </div>

    )
}

export default DashBoard
