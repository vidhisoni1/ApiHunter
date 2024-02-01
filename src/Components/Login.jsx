import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [input, setInput] = useState({ email: '', password: '' })
    const dispatch=useDispatch()
    const navigate = useNavigate()


    const handleChange = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:5000/users?email=${input.email}`)
        .then(res=>{
            if(res.data.length>0){
                if(res.data[0].password===input.password){
                    dispatch({type:'login',payload:res.data[0]})
                    axios.post('http://localhost:5000/current-user',res.data[0])
                    .then(res=>{
                        navigate('/products')
                    })
                    .catch(err=>console.log(err))
                }else{
                    console.log('wrong')
                }
            } else{
                console.log('email wrong')
            }
        })
    }

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                        <div className="card-body p-5 text-center">
                            <div className="mb-md-5 mt-md-4 pb-5">
                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                <form action="" onSubmit={handleLogin}>
                                    <div className="form-outline form-white mb-4">
                                        <input required onChange={handleChange} type="email " name='email' value={input.email} className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input required onChange={handleChange} type="password" name='password' value={input.password} id="phoneNumber" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                                    </div>

                                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                </form>
                            </div>
                            <div>
                                <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login