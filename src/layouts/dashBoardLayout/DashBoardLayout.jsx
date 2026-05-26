import React, { useEffect } from 'react';
import './dashBoardLayout.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/react';
// import { useAuth } from '@clerk/clerk-react';

const DashBoardLayout = () => {

    const { userId, isLoaded } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoaded && !userId) {
            navigate('/sign-in');
        }
    }, [isLoaded, userId, navigate]);

    if(!isLoaded) return "Loading...";

    return (
        <div className="dashBoardLayout">
            <div className="menu">MENU</div>
            <div className="content">
                <Outlet />
            </div>

        </div>
    );
};

export default DashBoardLayout;