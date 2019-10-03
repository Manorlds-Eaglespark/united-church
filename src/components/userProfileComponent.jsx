import React from 'react';
import Header from '../components/common/Header'

const userProfileComponent = () => (
    <div>
        <Header />
        <div>
            <h2 className="profile-title">Your Profile Card</h2>
            <div className="card center-user-profile">
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="John" />
                <h1>John Kamogs</h1>
                <p className="title">Prayer warrior, Harvest Church</p>
                <p>Bukoto, Kampala</p>
            </div>
        </div>
        <footer />
    </div>
);

export default userProfileComponent;
