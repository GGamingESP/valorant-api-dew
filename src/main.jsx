import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Maps from './Maps.jsx';
import './index.css'
import CharacterDetails from './CharacterDetails.jsx';
import MapDetails from './MapDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:uuid",
    element: <CharacterDetails />,
  },
  {
    path: "/maps",
    element: <Maps />,
  },
  {
    path: "/maps/:uuid",
    element: <MapDetails/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
