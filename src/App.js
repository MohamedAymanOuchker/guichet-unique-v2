import './App.css';
import Dashboard from './pages/Dashboard';
import MaC from './pages/MaC';
import Dum from './pages/Dum';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ma-c" element={<MaC />} />
        <Route path="/dum" element={<Dum />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
