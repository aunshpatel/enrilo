import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home.jsx';
import Header from './pages/components/header.jsx';
import Footer from './pages/components/Footer.jsx';

function App() {
  
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
