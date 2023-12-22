import { useState } from 'react'
import './App.css'
import Layout from './layout';
import MainPage from './pages/mainPage';
import NotFound from './pages/notfound'; 
import About from './pages/aboutPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <About />
    </>
    // <Router>
    //   <Layout>
    //       <Routes>
    //         <Route path="/" element={<MainPage />} />
    //         <Route path="*" element={<NotFound />} /> 
    //         <Route path="/about" element={<About />} />
    //       </Routes>
    //   </Layout>
    // </Router>
  )
}

export default App
