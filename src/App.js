import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);  

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col overflow-auto">
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />

      <Routes>
        <Route path='/' element = {<Home isLoggedIn = {isLoggedIn} />} />
        <Route path='/Aboutus' element = {<AboutUs isLoggedIn = {isLoggedIn} />} />
        <Route path='/Contactus' element = {<ContactUs isLoggedIn = {isLoggedIn} />} />
        <Route path='/login' element = {<Login setIsLoggedIn = {setIsLoggedIn} />} />
        <Route path='/signup' element = {<SignUp setIsLoggedIn = {setIsLoggedIn} />} />
        <Route path='/dashboard' element = {
          <PrivateRoute isLoggedIn = {isLoggedIn} >
            <Dashboard  />
          </PrivateRoute>
        } />
      </Routes>

    </div>
  );
}

export default App;
