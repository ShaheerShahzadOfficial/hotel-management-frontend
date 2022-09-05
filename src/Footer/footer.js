import React from 'react'
import "./footer.css";

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <h1>Hotel Management System</h1>
                </div>
                <div className="followUs">
                    <h3>Follow Us</h3>
                    <i className="fa fa-instagram" id="instagram">   </i>
                    <i className="fa fa-whatsapp" id="whatsapp">   </i>
                    <i className="fa fa-facebook-square" id="facebook">  </i>
                </div>
            </div>
            <div className="CopyRight">
                <h3>CopyRight @ <a href='https://github.com/ShaheerShahzadOfficial' target={"_blank"}> shaheershahzad </a></h3>
            </div>
        </div>
    )
}

export default Footer