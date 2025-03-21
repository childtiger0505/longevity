import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className="navBar">
                <Link to="/second" >
                    <img src="../images/listing.svg" />
                </Link>
                <img src="../images/like minded.svg" />
                <Link to = "/home" >
                    <img src="../images/Frame2753.svg" />
                </Link>
                <img src="../images/task.svg" />
                <img src="../images/Airdrop.svg" />
            </div>
            
        </>
    )
}
export default Navbar;