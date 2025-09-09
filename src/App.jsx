import { useState } from 'react'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import { ProductProvider } from './context/Product';
import Session from './pages/Session';
import { WorkoutSession } from './pages/WorkoutSession';
import { NotFound } from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route errorElement={<Error />}>
          <Route path="/" element={<Home />} />
          <Route path="session" element={<Session />}>
            <Route index element={<Navigate to={"monday"} replace />} />
            <Route path=":days" element={<WorkoutSession />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>,
    ),
  );

  return (
    <>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </>
  );
}

export default App
