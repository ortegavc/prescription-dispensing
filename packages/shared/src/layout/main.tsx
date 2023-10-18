import React, { FC, ReactNode, Fragment } from "react";
import { Outlet } from "react-router-dom";



import Navbar from "./navbarLight";
import Slider from "./slider";
import Content from "./content";
import Footer from "./footer";
import { SidebarProvider } from "./SidebarContext";

export interface IlayoutProps {
    children: ReactNode;
}

export const Main = () => {


    return (
        <Fragment>

            <SidebarProvider>
                <Navbar />
                <Slider />
                <Content >
                    <Outlet />
                </Content>
                <Footer />
            </SidebarProvider>

        </Fragment>
    );
};
