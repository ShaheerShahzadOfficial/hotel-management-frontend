import "./AllRoom.css"
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import SideBar from '../DashBoard/SideBar/sideBar';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const AllRooms = ({ history }) => {
    const dispatch = useDispatch()



    useEffect(() => {




    }, [])


    const columns = [
        { field: "id", headerName: "Room ID", minWidth: 250, flex: 1 },

        {
            field: "number",
            headerName: "Room Number",
            minWidth: 250,
            flex: 1,
        },
        {
            field: "available",
            headerName: "Availablity",
            type: "number",
            minWidth: 150,
            flex: 0.3,
        },

        {
            field: "price",
            headerName: "Rent",
            type: "number",
            minWidth: 250,
            flex: 0.5,
        },

        {
            field: "actions",
            flex: 0.3,
            headerName: "Actions",
            minWidth: 150,
            type: "number",
            sortable: false,
            renderCell: (params) => (

                <Fragment>
                    <Button
                        onClick={() =>
                            alert(params.getValue(params.id, "id"))  }>   
                        <EditIcon />
                    </Button>

                    <Button
                        onClick={() =>
                            alert(params.getValue(params.id, "id"))
                        }
                    >
                        <DeleteIcon />
                    </Button>
                </Fragment>

            ),
        },
    ];

    const rows = []
    

    return (
        <Fragment>

            <div className="dashboard">
                <SideBar />
                <div className="productListContainer">
                    <h1 id="productListHeading">ALL ROOMS</h1>

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        disableSelectionOnClick
                        className="productListTable"
                        autoHeight
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default AllRooms
