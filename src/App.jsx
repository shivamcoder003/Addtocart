import React, { useEffect } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './Comp/Homepage'
import Navbar from './Comp/Navbar'
import Cart from './Comp/Cart'
import CursorEffect from './Comp/CursorEffect'
const App = () => {



  return (
    <div>
     <BrowserRouter>
      <CursorEffect />
     <Navbar></Navbar>
     <Routes>
      
<Route path='/' element={<Homepage></Homepage>}></Route>
 <Route path="/cart" element={<Cart></Cart>}/>




     </Routes>
     
     
     
     
     </BrowserRouter>
    </div>
  )
}

export default App
