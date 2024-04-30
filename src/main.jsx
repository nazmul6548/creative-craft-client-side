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
import Updatecraft from './Pages/Updatecraft';
import NewData from './Component/NewData';
import MatchingData from './Pages/MatchingData';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch('https://art-and-craft-server-eta.vercel.app/artCraft'),
        

      },
      {
        path:"/detailscard/:id",
        element:<PrivateRoute>
          <DetailsCart></DetailsCart>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://art-and-craft-server-eta.vercel.app/artCraft/${params.id}`)
          
      },
      {
        path:"/addCraftItem",
        element:<PrivateRoute>
          <AddCraftItem></AddCraftItem>
        </PrivateRoute>
      },
      {
        path:"/allArtCraft",
        element:<AllArtCraftItems></AllArtCraftItems>,
        loader:() => fetch('https://art-and-craft-server-eta.vercel.app/artCraft')
      },
      {
        path:"/myCraft",
        element:<PrivateRoute><MyCraftList></MyCraftList></PrivateRoute>,
        // loader:({params}) => fetch(`https://art-and-craft-server-eta.vercel.app/artCraft/${params.email}`)
      },
      {
        path:"/logIn",
        element:<LogIn></LogIn>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/updatecraft/:id",
        element:<Updatecraft></Updatecraft>,
        loader:({params}) => fetch(`https://art-and-craft-server-eta.vercel.app/artCraft/${params.id}`)
      },
      {
        path:'/matchdata/:category',
        element:<MatchingData></MatchingData>,
        loader:({params})=> fetch(`https://art-and-craft-server-eta.vercel.app/artCraft/category/${params.category}`)

      }
    
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
