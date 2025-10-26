import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddNewConsultancy from "./pages/AddNewConsultancy.jsx";
import Header from "./pages/components/Header.jsx";
import Footer from "./pages/components/Footer.jsx";
import Sidebar from "./pages/components/Sidebar.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-[#F8FAFC]">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-new-consultancy" element={<AddNewConsultancy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;