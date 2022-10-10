import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <main className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }></Route>
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
