//css
import './App.css';
//components
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import LoginForm from './components/Navbar/FormLoginSignup/LoginForm';
import SignupForm from './components/Navbar/FormLoginSignup/SignupForm';
//react-router-dom
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
