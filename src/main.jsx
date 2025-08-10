import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'

import { router } from './routes/router.jsx'
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import Loading from './pages/Loading/Loading.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './contexts/AuthContext/ThemeContext.jsx'


createRoot(document.getElementById('root')).render(
   <div className='font-urbanist'>
      <HelmetProvider>
         <ThemeProvider>
            <AuthProvider>
               <Suspense fallback={<Loading />}>
                  <RouterProvider router={router} />
               </Suspense>
               <ToastContainer></ToastContainer>
            </AuthProvider>
         </ThemeProvider>
      </HelmetProvider>
   </div>
)
