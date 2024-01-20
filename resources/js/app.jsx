import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Carousel from './Pages/Carousel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

const appRoot = document.getElementById('app');
if (appRoot) {
  createRoot(appRoot).render(<App />);
}
