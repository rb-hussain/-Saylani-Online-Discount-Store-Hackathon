import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/register/Register';
import { UserAuthContextProvider } from './contexts/UserAuthContext';
import WelcomeScreen from './pages/WelcomeScreen';
import MainRouter from './router/MainRouter';

function App() {
  return (
    <div className="App">
     {/* <MainRouter /> */}
    
     <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home/>
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<WelcomeScreen/>} />
            </Routes>
          </UserAuthContextProvider>
    </div>
  );
}

export default App;
