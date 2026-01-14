
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfo } from './components/Github/Github.jsx'
import Users from './components/Users/Users.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
      path:"",
      element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      { 
        loader:githubInfo,
        path:'github',
        element:<Github/>
      },
      {
        path:'users/:userid',
        element:<Users/>
      }
  ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
