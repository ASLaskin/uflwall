import { useState } from 'react'
import './App.css'
import Layout from './layout';
import Home from './page';
import NotFound from './pages/notfound'; 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
      </Layout>
    </Router>
  )
}

export default App
