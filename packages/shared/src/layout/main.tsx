import React, { FC, ReactNode, Fragment } from "react";
import { Outlet } from "react-router-dom";
import RequireAuth from "./requireAuth";
import Navbar from "./navbar";
import Slider from "./slider";
import Content, { CenterMain } from "./content";
import Footer from "./footer";
import { SidebarProvider } from "./SidebarContext";

export interface IlayoutProps {
    children: ReactNode;
}

export const Main = () => {


    return (
        <Fragment>
            <SidebarProvider>
                <RequireAuth>
                    <Navbar />
                    <CenterMain> 
                    <Slider />
                    <Content>
                        <Outlet />
                    </Content>
                    <Footer />
                    </CenterMain>
                </RequireAuth>
            </SidebarProvider>
        </Fragment>
    );
};
