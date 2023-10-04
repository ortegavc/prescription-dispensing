
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "@presentation/stores";
import Layout, { Dashboard } from '@msp/shared';
import Terminal from '@presentation/views/terminal';

export default function Root(props: any) {

  return (

    <Layout>
      <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/terminal" element={<Dashboard />} />
          <Route path="/terminal/usuario" element={<Terminal />} />
        </Routes>
        </Provider>
      </BrowserRouter>
    </Layout>

  );

}
