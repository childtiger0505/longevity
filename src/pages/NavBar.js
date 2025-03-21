import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className="navBar">
                <Link to="/second" >
                    <img src="../images/listing.svg" alt=""/>
                </Link>
                <img src="../images/like minded.svg" alt=""/>

                 <Link to = "/" >
                    <img src="../images/Frame2753.svg" alt=""/>
                </Link>
                <img src="../images/task.svg" alt=""/>
                <img src="../images/Airdrop.svg" alt=""/>
            </div>
            
        </>
    )
}
export default Navbar;