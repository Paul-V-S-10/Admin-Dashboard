import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import './main.css'
import District from './Admin/District/District'

ReactDOM.createRoot(document.getElementById('root')).render(
    // <RouterProvider router={router} />
    <District/>
)
