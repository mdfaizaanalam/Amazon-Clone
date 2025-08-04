import React from 'react';
import { NavLink } from 'react-router-dom';
import "../newnav/newnav.css";

const Newnav = () => {
    return (
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    <NavLink to="/all" className="nav_item">
                        <i className="fas fa-shopping-cart"></i> All
                    </NavLink>
                    <NavLink to="/mobiles" className="nav_item">Mobiles</NavLink>
                    <NavLink to="/best-sellers" className="nav_item">Best Sellers</NavLink>
                    <NavLink to="/fashion" className="nav_item">Fashion</NavLink>
                    <NavLink to="/customer-service" className="nav_item">Customer Service</NavLink>
                    <NavLink to="/electronics" className="nav_item">Electronics</NavLink>
                    <NavLink to="/prime" className="nav_item">Prime</NavLink>
                    <NavLink to="/todays-deals" className="nav_item">Today's Deals</NavLink>
                    <NavLink to="/amazon-pay" className="nav_item">Amazon Pay</NavLink>
                </div>
                <div className="right_data">
                    <img src="nav.jpg" alt="navdata" className="nav_image" />
                </div>
            </div>
        </div>
    );
}

export default Newnav;
