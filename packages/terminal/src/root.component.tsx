import Layout, { Dashboard } from '@msp/shared';
import Terminal from '@presentation/views/terminal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Root(props: any) {

  return (

    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/terminal" element={<Dashboard />} />
          <Route path="/terminal/usuario" element={<Terminal />} />
        </Routes>
      </BrowserRouter>
    </Layout>

  );

}
