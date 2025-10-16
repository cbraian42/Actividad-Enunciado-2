import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import PersonalInfo from './pages/PersonalInfo';
import ContactInfo from './pages/ContactInfo';
import Confirmation from './pages/Confirmation';
import Usuarios from './pages/Usuarios';
function App() {
return (
<BrowserRouter>
<div className="app">
<nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
<Link to="/" style={{ marginRight: '15px' }}>Inicio</Link>
<Link to="/register">Registrarse</Link>
<Link to="/usuarios" style={{ marginLeft: '15px' }}>Usuarios</Link>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/register" element={<Register />}>
  <Route index element={<PersonalInfo />} />
  <Route path="personal" element={<PersonalInfo />} />
  <Route path="contact" element={<ContactInfo />} />
  <Route path="confirmation" element={<Confirmation />} />
</Route>
<Route path="/usuarios" element={<Usuarios />} />
</Routes>
</div>
</BrowserRouter>
);
}

export default App;