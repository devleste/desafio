import './reset.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'

//Paginas
import Home from './routes/Home.jsx'
import NewContato from './routes/NewContato'
import EditContato from './routes/EditContato.jsx'

const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/new',
        element : <NewContato />
      },
      {
        path: '/edit/:id',
        element: <EditContato />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
