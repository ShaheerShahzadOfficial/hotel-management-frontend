import React, { useState, useEffect } from "react"
import "./AddRoom.css"
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DescriptionIcon from '@mui/icons-material/Description';
import StorageIcon from '@mui/icons-material/Storage';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { useDispatch, useSelector } from "react-redux";
import { createRoom } from "../../Redux/Actions/RoomActions";
import swal from "sweetalert"
import { ADD_NEW_ROOM_RESET } from "../../Redux/constants"
import { useNavigate } from "react-router-dom"
const AddRoom = () => {
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [RoomNo, setRoomNo] = useState("")
    const [description, setDescription] = useState("")
    const [Rent, setRent] = useState("")
    const [category, setCategory] = useState("")
    const [Availablity, setAvailablity] = useState("")
    const [NoOfBed, setNoOfBed] = useState("")

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { success } = useSelector(state => state.AddProduct)

    useEffect(() => {


        if (success) {
            swal("Product Created Successfully");
            dispatch({ type: ADD_NEW_ROOM_RESET });
            navigate("/");

        }
    }, [dispatch,]);

    const createRoomSubmitHandler = (e) => {
        e.preventDefault();

        dispatch(createRoom(RoomNo,NoOfBed,Rent,category,images ,Availablity, description,  ));
    };


    const createRoomImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState >= 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    };


    return (
        <div className="flex">
            <div className="addRoom">
                <form onSubmit={createRoomSubmitHandler}>
                    <div>
                        <input type="number" value={RoomNo} onChange={e => setRoomNo(e.target.value)} placeholder="Room Number" />
                    </div>


                    <div>
                        <input type="number" value={NoOfBed} onChange={e => setNoOfBed(e.target.value)} placeholder="Number Of Bed" />
                    </div>

                    <div>
                        <AttachMoneyIcon />
                        <input type="number" value={Rent} onChange={e => setRent(e.target.value)} placeholder="Rent" />
                    </div>

                    <div>
                        <DescriptionIcon />
                        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} column={4} />
                    </div>

                    <div>
                        <AccountTreeIcon />
                        <select name="Room Type" value={category} onChange={e => setCategory(e.target.value)} >
                            <option value="Normal">Normal</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Vip">Vip</option>
                        </select>
                    </div>

                    <div>
                        <StorageIcon />
                        <select name="Availablity" onChange={e => setAvailablity(e.target.value)} value={Availablity}>
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                        </select>
                    </div>

                    <div id="createProductFormFile">
                        <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={createRoomImagesChange}
                            multiple
                        />
                    </div>

                    <div id="createProductFormImage">
                        {imagesPreview.map((image, index) => (
                            <img key={index} src={image} alt="Product Preview" />
                        ))}
                    </div>


                    <div>
                        <button type="submit">Add Product</button>
                    </div>
                </form>
            </div>
            <div className="image"> world</div>
        </div>
    )

}

export default AddRoom