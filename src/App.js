import { Routes, Route } from 'react-router-dom'

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
