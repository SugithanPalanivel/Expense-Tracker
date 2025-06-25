import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expenses from './pages/Dashboard/Expenses';
import UserProvider from './context/UserContext';
import {Toaster} from "react-hot-toast";

 

const App = () => {
  return (
    <UserProvider>
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Root/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/signup' exact element={<SignUp/>}/>
          <Route path='/dashboard' exact element={<Home/>}/>
          <Route path='/income' exact element={<Income/>}/>
          <Route path='/expense' exact element={<Expenses/>}/>


        </Routes>
      </Router>
    </div>
    <Toaster
      toastOptions={{
        className:"",
        style:{
          fontSize:'13px'
        },
      }}
    />
    </UserProvider>
  )
}

export default App;

const Root=()=>{
  // Check if token is authenticated
  const isAuthenticated=!!localStorage.getItem("token");
  // Redirect to dashboard is Authenticated,otherwise to LOgin
  return isAuthenticated ? (
  <Navigate to="/dashboard"/>

  ):(
    <Navigate to="/login"/>
  );
};