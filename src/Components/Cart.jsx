import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const [cartItems,setCartItems]=useState([])
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [items, setItems] = useState([]);

    const handleClick = (id) => {
        
    }

    useEffect(()=>{
        if(auth){
            axios.get(`http://localhost:5000/users/${auth.id}`)
            .then((res)=>setCartItems(res.data.cart))
        }
    },[auth])
    

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 mt-5 ">
            <table className="w-full text-left border-1">
                <thead className="text-xs font-semibold uppercase text-gray-500 bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">Product</th>
                        <th className="px-4 py-2">Price</th>
                        {/* <th className="px-4 py-2">Quantity</th> */}
                        {/* <th className="px-4 py-2">Total</th> */}
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-sm font-medium divide-y divide-gray-200">
                    {
                        cartItems.map((item, i) =>
                            <tr key={i}>
                                <td className="px-4 py-2">
                                    <div className="flex items-center">
                                        <img src={item.img} alt="Product Image" className="w-12 h-12 rounded-md object-contain" />
                                        <div className="ml-4">
                                            <p>{item.title}</p>
                                            <p className="text-gray-500">{item.brand}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-2">${item.price}</td>
                                {/* <td className="px-4 py-2">
                                    <input type="number" defaultValue={1} min={1} className="w-16 border-gray-300 text-right" />
                                </td> */}
                                {/* <td className="px-4 py-2">$99.99</td> */}
                                <td className="px-4 py-2">
                                   
                                    <button className='btn btn-danger' >Delete </button>
                                    <button className='btn'>+ </button>
                                    
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Cart