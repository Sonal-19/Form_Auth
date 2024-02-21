import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../form/Login';
import SignUp from '../form/Signup';
import Forget from '../form/Forget';
import Dashboard from '../page/Dashboard';
import OtpVerify from '../form/OtpVerify';

export default function Main() {
  return (
    <>
    <div>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/otpverify' element={<OtpVerify/>}/>
            <Route path='/forget' element={<Forget/>}/>
            <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
    </div>
    </>
  )
}
