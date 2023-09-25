import React, {
  FC,
  ReactNode, Fragment
} from "react";
import {
  Outlet
} from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import Subnavbar from "./Subnavbar";

export interface IlayoutProps {
  children: ReactNode;
}

export const Main = () => {

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col">
        <header className="mx-2">{<Header />}</header>
        <header className="mx-2">
          <Subnavbar />
        </header>
        <div className="flex-1 flex flex-col lg:flex-row">
          <main className="flex-1 p-5 rounded m-2 bg-white shadow-md border border-gray-200">
            <Outlet />
          </main>
        </div>
        <footer className="mx-2 rounded-lg">
          <Footer />
        </footer>
      </div>
    </Fragment>
  );
};
