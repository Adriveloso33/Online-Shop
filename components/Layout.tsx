/* eslint-disable react/no-unknown-property */
import React from "react";
import Navbar  from "./Navbar"

interface Props{
    children: any
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar/>
            {children}

            <style jsx global>{`
                html,
                body{
                    margin: 0;
                    padding: 0;
                }
                ul{
                    list-style-type: none;
                }
                `}
            </style>
        </>
    )
}

export default Layout;