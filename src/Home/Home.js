import React from 'react'
import "./home.css"
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
const Home = () => {
  return (

<div>

<div className='banner'>

<h1>
Where you go Stay,
</h1>
<h1>
Only in Our Rooms
</h1>

<div className={"SearchBar"}>

    <input type="search" placeholder='Search Rooms' className='Search'/>
<Button color={"success"} variant="contained" startIcon={<SearchIcon size="large"/>}>Search</Button>

</div>

</div>


</div>




    )
}

export default Home