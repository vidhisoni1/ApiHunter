import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const auth =useSelector(state=>state.auth)
    const disptach =useDispatch()
    const navigate = useNavigate()
    const handlelogout =() =>{
        axios.delete(`http://localhost:5000/current-user/${auth.id}`)
        .then(()=>{
            disptach({type:'login',payload:null})
            navigate('/login')
        })
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand text-light" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="" id="navbarNavAltMarkup">
                <div className="navbar-nav">{
                    !auth? <>
                    <Link to={'/signup'} className="dropdown-item text-light" >Sign Up</Link>
                    <Link to={'/login'} className="dropdown-item mx-2 text-light" >Login</Link>
                    </>: <button  className="dropdown-item ms-2 text-light" onClick={handlelogout}>Logout</button>

                }
                    
                    <Link to={'/products'} className="dropdown-item ms-2 text-light" >Products</Link>
                   
                    <Link to={'/cart'} className="dropdown-item ms-2 text-light" >Cart</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header