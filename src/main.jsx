import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './components/mainpage.jsx'
import FoodRecipe from './components/loadpage.jsx'
const route=createBrowserRouter([
{path:"/" , element:<MainPage/>},
{path:"/load" , element:<FoodRecipe/>}
])
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>

 <RouterProvider router={route} />
  </React.StrictMode>
  
,
)
