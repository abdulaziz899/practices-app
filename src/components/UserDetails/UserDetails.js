import React from 'react';
import './UserDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const UserDetails = (props) => {
    const user=props.user;
    return (
        <div className="dd" >
            <h1>Name :{user.name}</h1>
            <p> countries:{user.countries}</p>
            <p> city:{user.city}</p>
            <p> job:{user.job}</p>
            <p> salary:{user.salary}</p>
            <p> phone:{user.phone}</p>
            <p> email:{user.email}</p>
            <img src={user.img} alt=""/>
            <div className="cartBtnControl">
                <button onClick={()=>props.handleCartUser(user)}> <FontAwesomeIcon icon={faPlus} /> add cart</button>
            </div>
        </div>
    );
};

export default UserDetails;