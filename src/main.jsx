import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Gadget Heaven</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  </StrictMode>,
)
