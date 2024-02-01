import React, { useEffect } from 'react'
import Products from './Components/Products'
import './App.css'
import Signup from './Components/Signup'
import Login from './Components/Login'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Cart from './Components/Cart'
import Protected from './Protected'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('http://localhost:5000/current-user')
      .then((res) => {
        if (res.data.length > 0) {
          dispatch({ type: 'login', payload: res.data[0] })
        }
      })
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={"hello"} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<Protected cmp={<Products />} />} />
        <Route path='/cart' element={<Protected cmp={<Cart />} />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App