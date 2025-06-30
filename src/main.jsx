import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { path } from 'framer-motion/client'
import ProjectDetails from './components/Projects/ProjectDetails.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    Component: App
  },
  {
    path: 'project/:id',
    Component: ProjectDetails
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-white'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
)
