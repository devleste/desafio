import './App.css'
import './main.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'


function App() {

  return (
    <div className='App'>
      < NavBar />
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
