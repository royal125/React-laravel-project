import { Route,Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Logout from './Pages/Logout';

function App() {
return(
    <div>
      <Home/>
   <Routes>
    <Route path="/signup" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/logout" element={<Logout/>}/>
   </Routes>
    </div>

)
} 

const appRoot = document.getElementById('app');
if (appRoot) {
  createRoot(appRoot).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
}