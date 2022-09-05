import React from 'react'
import "./home.css"
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
const Home = () => {
  return (

<div>

<div className='banner'>

<h1>
 Enjoy Your Stay
</h1>
<h1>
  In Our World Class Hotels
</h1>
<a href="#About">
<button className={"btn"}>Scroll Down</button>
</a>
</div>



<div> 
  <h1 className="homeHeading">Perks of Using Our Services</h1>


<div className="perks" id={"About"}>
  
  <div className="perks_div">
    <RestaurantMenuIcon/>
     <h2> Free Meals </h2>
     <h3> On Every Booking </h3>
  </div>

  <div className="perks_div">
    <AccountBalanceIcon/>
     <h2> Great Location </h2>
     <h3> with Lake Or Park View </h3>
  </div>


  <div className="perks_div">
    <FitnessCenterIcon/>
     <h2> Gym</h2>
     <h3> Highly Qualified Trainer </h3>
  </div>

</div>


</div>

</div>




    )
}

export default Home