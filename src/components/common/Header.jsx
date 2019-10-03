import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';

export default function Header() {
    return (
        <div className="nav-title">
            <ul>
                <li><Link to="/home">United CHURCH Home</Link></li>
                <li><Link to="/church-profiles">Church Profiles</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
                <li><Link to="/user-profile">Profile</Link></li>
            </ul>
        </div>
    );
}
