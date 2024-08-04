import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Shutter from './additionals/Shutter'
import { store } from '../app/store'
import Feed from './pages/Feed'
function App() {
  
const isSignedIn=store.getState().auth.isSignedUp
console.log(isSignedIn)
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        {
          isSignedIn && (<Route path='/feed' element={<Feed/>} />)
        }

    </Routes>
  )
}

export default App
