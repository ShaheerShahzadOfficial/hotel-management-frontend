import "./sideBar.css"
import React from 'react'
import { Link } from "react-router-dom"
import { TreeView, TreeItem } from "@mui/lab"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";


const SideBar = () => {
    return (
        <div className="sidebar">
            <Link to={"/"}>
                Hotel Management System
            </Link>

            <Link to={"/admin/DashBoard"}>
                <p>
                    <DashboardIcon /> Dashboard
                </p>
            </Link>

            <ul className="Tree">
                <TreeView defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ImportExportIcon />}
                >
                    <TreeItem nodeId="1" label="Rooms">
                        <Link to={"/admin/AddRoom"}>
                            <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
                        </Link>
                        <Link to={"/admin/AllRooms"}>
                            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
                        </Link>
                    </TreeItem>
                </TreeView>
            </ul>

            <Link to={"/admin/Booking"}>
                <p>
                    <ListAltIcon />
                    Booking
                </p>
            </Link>
            <Link to={"/admin/AllUsers"}>
                <p>
                    <PeopleIcon /> Users
                </p>
            </Link>
        </div>)
}

export default SideBar