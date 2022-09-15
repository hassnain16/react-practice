import React from 'react';
import { Link } from 'react-router-dom';
interface SideBarInterface {
    text: string;
}
const SideBarAsFC: React.FC<SideBarInterface> = (SideBarInterface) => {

    return (
        <>
            <Link to="/">Home</Link> | {" "}
            <Link to="dashboard">Dashboard</Link> | {" "}
            <Link to="about">About</Link>
            <h2>{SideBarInterface.text}</h2>
        </>
    )
}

export default SideBarAsFC