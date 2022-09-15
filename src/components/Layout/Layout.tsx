import React from 'react';
import HeaderAsFC from './Header/Header';
import SideBarAsFC from './SideBar/Sidebar';
import { Outlet } from 'react-router-dom';
const Layout: React.FC = () => {

    return (
        <>
            <HeaderAsFC text="Heading" />
            {/* <SideBarAsFC text="Sidebar" /> */}
            <Outlet />
        </>
    )
}
export default Layout