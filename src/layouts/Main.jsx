/* eslint-disable no-unused-vars */
import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Main() {
    return (
        <div>
            <NavigationBar/>
                <Outlet/>
            <Footer/>
        </div>
    );
}

export default Main;