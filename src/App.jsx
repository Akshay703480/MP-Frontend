
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './bootstrap.rtl.min.css'

import Footer from './Components/Footer'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'
import PageNotFound from './Pages/PageNotFound'








function App() {
 
  return (
    <>
    <Header/>
    <Routes>
      <Route path={'/'} element={<LandingPage/> }/>
      <Route path={'/Home'} element={<Home/>}/>
      <Route path={'/WatchHistory' }  element={<WatchHistory/>} />
      <Route path={'* ' }  element={<PageNotFound/>} />
    </Routes>
    <Footer/>
   
    
      
    </>
  )
}

export default App
