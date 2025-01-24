import React from 'react';
import { Outlet } from 'react-router-dom';
import EasyLiveHeader from '../components/shared/EasyLiveHeader';
import Footer from '../components/shared/Footer';

const MainLayout = () => {
    return (
        <>
            <EasyLiveHeader />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout
