import './index.css';
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import rootComponent from "./root.component";
import singleSpaReact, { SingleSpaContext } from 'single-spa-react';

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return <div>Ocurrio un error</div>;
  },
});