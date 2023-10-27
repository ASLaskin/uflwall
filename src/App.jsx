import { useState } from 'react'
import './App.css'
import Layout from './layout';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </Layout>
    </Router>
  )
}

export default App
