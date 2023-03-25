import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '@views'

function PageNotFound() {
  return <Navigate to={'/'} />
}

function App() {
  return (
    <div className='layout'>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
