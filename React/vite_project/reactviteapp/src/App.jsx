import './App.css'
import Profile from './component/profile.jsx'
import Gallery from './component/gallery.jsx'
import ImageManipulation from './component/imageManipulation.jsx' 
import { BrowserRouter,Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div className='container'>
      <h2>Welcome to react vite</h2>
      <BrowserRouter>
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/imageManipulation' element={<ImageManipulation/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
