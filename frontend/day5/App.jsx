import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Componenets/Home'
import UserStatus from './Componenets/UserStatus'
import UserApply from './Componenets/UserApply'
import Profile from './Componenets/Profile'
import AdminDetails from './Admin/AdminDetails'
import AdminAccept  from './Admin/AdminAccept'
import NavBar from './NavBar';

import Login from './Componenets/Login';

import SignUp from './Componenets/SignUp';
import Profile1 from './Componenets/Profile1'
import AdminHome from './Admin/AdminHome';
import  LoanStatus from './Admin/LoanStatus'
import SchemeDetails from './Admin/SchemeDetails';
import AdminProfile from './Admin/AdminProfile'

import AdminCustomer from './Admin/AdminCustomer'
function App() {
  

  return (
    <BrowserRouter>
      <div>
          
          {/* <Login/> */}
          {/* <Signup/> */}
          
        <Routes>
          
        
          <Route path="/" element={<Home/>}/>
         

          <Route path="/nav" element={<NavBar/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/status" element={<UserStatus/>}/>
          <Route path="/loan" element={<UserApply/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/pro" element={<Profile1/>}/>
          <Route path='/adminHome'element={<AdminHome/>}></Route>
          <Route path="/details" element={<AdminDetails/>}/>
          <Route path="/accept" element={<AdminAccept/>}/>
          <Route path="/loanStatus" element={<LoanStatus/>}/>
          <Route path="/schemes" element={<SchemeDetails/>}/>
          <Route path="/adminProfile" element={<AdminProfile/>}/>
          <Route path="/customers" element={<AdminCustomer/>}/>

        </Routes>
        
      </div>
      </BrowserRouter>
  
  
  )
}

export default App
