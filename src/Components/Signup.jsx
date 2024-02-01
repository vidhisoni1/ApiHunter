import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [input,setInput]=useState({name:'',email:'',password:'',mobile:''})
    const navigate = useNavigate()

    const handleChange = (e) => { 
        const {name,value}=e.target
        setInput({...input,[name]:value})
    }

    const handleSubmit = (e) => { 
        e.preventDefault()
        axios.post('http://localhost:5000/users',input)
        .then((res)=>navigate('/login'))
     }

    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{ borderRadius: 15 }}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className=" mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="firstName">Name</label>
                                                    <input required onChange={handleChange} type="text" name='name' value={input.name} id="firstName" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="emailAddress">Email</label>
                                                    <input required onChange={handleChange} type="email" name='email' value={input.email} id="emailAddress" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                                    <input required onChange={handleChange} type="tel" name='mobile' value={input.mobile} id="phoneNumber" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="phoneNumber">Password</label>
                                                    <input required onChange={handleChange} type="password" name='password' value={input.password} id="phoneNumber" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4 pt-2">
                                            <input required onChange={handleChange} className="btn btn-primary btn-lg" type="submit" defaultValue="Submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Signup