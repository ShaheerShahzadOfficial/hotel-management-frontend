import React, { Fragment, useEffect, useState } from 'react'
import { Backdrop } from '@mui/material'
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDial from '@mui/material/SpeedDial';
import "./UserOptions.css"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Icon from "../Images/UserIcon.png"
import {Logout} from "../Redux/Actions/UserActions"


const UserOptions = () => {




    const { user } = useSelector(state => state.Auth)


    


    const [Open, setOpen] = useState(false)

    const navigate = useNavigate()
    const order = () => {
        navigate("/MyBookings")
    }



    const Profile = () => {
        navigate("/Account")

    }


    const dispatch = useDispatch()

    const logout = () => {
        dispatch(Logout())
        navigate("/login")
    }

    const DashBoard = () => {
        navigate("/admin/DashBoard")


    }


    const cart = () => {
        navigate("/MyBookings")
    }


    const options = [
        { icon: <ListAltIcon />, name: "Orders", func: order },
        { icon: <PersonIcon />, name: "Profile", func: Profile },
        { icon: <ShoppingCartIcon />, name: `MyBookings`, func: cart },
        { icon: <ExitToAppIcon />, name: "Logout", func: logout },
    ]


    // if (user?.role === "Admin") {
    //     options.unshift(
    //         { icon: <DashboardIcon />, name: "DashBoard", func: DashBoard },
    //     )
    // }



    return (

        <Fragment>
          
                <Fragment>
                    <Backdrop open={Open} style={{ zIndex: 11 }} />
                    <SpeedDial className='speedDial' ariaLabel={"LogIn"}
                        onOpen={() => setOpen(true)}
                        onClose={() => setOpen(false)}
                        open={Open}
                        direction="down"
                        style={{ zIndex: 11 }}

                        icon={
                            <img src={Icon} alt={"name"} className="speedDialIcon" />
                        }>


                        {
                            options.map((item, i) => (
                                <SpeedDialAction key={i} icon={item.icon} tooltipTitle={item.name} tooltipOpen onClick={item.func}></SpeedDialAction>

                            ))
                        }

                    </SpeedDial>
                </Fragment>

           
        </Fragment>
    )


}

export default UserOptions