import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Products from './component/Products/Products.jsx'
import TopProducts from './component/TopProducts/TopProducts.jsx'
import Banner from "./component/banner/banner";
import Home from './component/Home/Home.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
           <Route element={<App/>}>
              <Route path='/' element={<Home />}/>
              <Route path='/Products' element= {<Products/>}/>
              <Route path='/TopProducts' element={<TopProducts/>}/>
              <Route path='/Banner' element={  <Banner/> }/>
           </Route>
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
