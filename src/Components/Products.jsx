import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Products = () => {
    const [products, setProducts] = useState([])
    const auth = useSelector(state => state.auth)
    console.log(auth)
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then((res) => { setProducts(res.data) })
    }, [])

    const addtoCart = (product) => {
        axios.get('http://localhost:5000/current-user')
            .then((res) => {
                axios.get(`http://localhost:5000/users/${auth.id}`)
                    .then(res => {


                        const user = res.data
                        let cart = [{ ...product, qty: 1 }]
                        if (user.cart) {
                            const check = user.cart.some(e => {
                                if (e.id === product.id) {
                                    e.qty += 1
                                    return true
                                }
                            })
                            if (!check) {
                                cart = [...user.cart, { ...product, qty: 1 }]
                            } else {
                                cart = user.cart
                            }
                        }
                        let updatedUser = { ...user, cart }
                        axios.put(`http://localhost:5000/users/${auth.id}`, updatedUser)
                        .then(res=>console.log(res))
                    })
            })
    }
    return (
        <div className='row '>
            {
                products.map((product, i) =>
                    <div className="product-card spacing col-3">
                        <div className="product-thumb">
                            <img src={product.img} />
                        </div>
                        <div className="product-details">
                            <span className="product-category">T-Shirt</span>
                            <h4><a href="#">New T-Shirt For Man</a></h4>
                            <p>New Import T-Shirt For Man Very Rare Collection, If You Want Order Right Now</p>
                            <div className="product-bottom-details">
                                <div className="product-price">$7.99</div>
                            </div>
                            <button className='btn btn-primary mt-3' onClick={() => addtoCart(product)}>Add to cart</button>
                        </div>
                    </div>
                )
            }

        </div>


    )
}

export default Products