import { Routes, Route } from 'react-router-dom'

import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
    </main>
  );
}

export default App;
