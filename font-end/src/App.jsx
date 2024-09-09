
import './App.css'
import FooterComponent from './component/FooterComponent'

import HeaderComponent from './component/HeaderComponent'
import ListComponent from './component/ListComponent'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MedecineComponent from './component/MedecineComponent'
function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* //:3000 */}
          <Route path='/' element={<ListComponent />}></Route>
          {/* //:3000/medecine */}
          <Route path='/medecine' element={<ListComponent />}></Route>

          <Route path='/add-medecine' element={<MedecineComponent />}></Route>
        
          <Route path='/edit-medecine/:id' element={<MedecineComponent />}></Route>
        </Routes>

        <FooterComponent />
      </BrowserRouter>

    </>
  )
}

export default App
