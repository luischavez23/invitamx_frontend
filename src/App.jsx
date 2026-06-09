import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import InvitationPage from './pages/InvitationPage'
import NotFound from './pages/NotFound'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/:slug" 
        element={<InvitationPage />} />
       <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}

export default App
