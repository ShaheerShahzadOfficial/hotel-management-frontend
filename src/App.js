import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Authentication/SignUp/SignUp"
import SignIn from "./Authentication/SignIn/SignIn"
import Home from "./Home/Home";
import Footer from "./Footer/footer";
import Rooms from "./Rooms/rooms";
import Contact from "./Contact/Contact";
import NavBar from "./Nav/nav";
import UserOptions from "./SpeedDial/speedDial";
import { useSelector, useDispatch } from "react-redux"
import { LoadUser } from "./Redux/Actions/UserActions";
import AddRoom from "./Admin/Rooms/AddRoom";
import AllRooms from "./Admin/AllRooms/allRooms";
import DashBoard from "./Admin/DashBoard/DashBoard";


function App() {

  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(state => state.Auth)


  useEffect(() => {
    dispatch(LoadUser())
  }, [dispatch]);
  return (
    <BrowserRouter>
      <NavBar />
      {isAuthenticated ? <UserOptions /> : null}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/room" element={<Rooms />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/admin/AddRoom" element={<AddRoom />} />
        <Route path="/admin/AllRooms" element={<AllRooms />} />
        <Route path="/admin/DashBoard" element={<DashBoard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
