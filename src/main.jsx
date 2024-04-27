import React from 'react'
import ReactDOM from 'react-dom/client'

// import {  HelmetProvider } from 'react-helmet-async';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './Pages/Error';
import Root from './Component/Root';
import AddCraftItem from './Pages/AddCraftItem';
import AllArtCraftItems from './Pages/AllArtCraftItems';
import MyCraftList from './Pages/MyCraftList';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import Home from './Component/Home';
import  AuthProvider  from './Component/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import DetailsCart from './Pages/DetailsCart';
import PrivateRoute from './Component/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch('http://localhost:5000/artCraft')

      },
      {
        path:"/detailscard/:id",
        element:<PrivateRoute>
          <DetailsCart></DetailsCart>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/artCraft/${params.id}`)
          
      },
      {
        path:"/addCraftItem",
        element:<PrivateRoute>
          <AddCraftItem></AddCraftItem>
        </PrivateRoute>
      },
      {
        path:"/allArtCraft",
        element:<AllArtCraftItems></AllArtCraftItems>
      },
      {
        path:"/myCraft",
        element:<MyCraftList></MyCraftList>
      },
      {
        path:"/logIn",
        element:<LogIn></LogIn>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
     
    
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
   
    
  </React.StrictMode>,
  
  
)
