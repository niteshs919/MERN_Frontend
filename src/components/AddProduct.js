import React, { useState } from 'react'
import { json } from 'react-router-dom'


const AddProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [company, setCompany] = useState('')
    const [error, setError] = useState(false);
    const addProduct = async () => {
        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem("user"))._id
        let result = await fetch("http://localhost:8085/add-product", {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: { 'Content-Type': 'application/json' }
        })
        result = await result.json();
        if(result){
            setName('');
            setPrice('');
            setCategory('');
            setCompany('');
        }
    }
    return (
        <div className='product'>
            <h1>AddProduct</h1>
            <input type="text" placeholder='Enter product name' className='inputBox' value={name} onChange={(e) => setName(e.target.value)} />
            {error && !name && <span className='invalid-input'>Enter name</span>}
            <input type="text" placeholder='Enter product price' className='inputBox' value={price} onChange={(e) => setPrice(e.target.value)} />
            {error && !price && <span className='invalid-input'>Enter Price</span>}
            <input type="text" placeholder='Enter product category' className='inputBox' value={category} onChange={(e) => setCategory(e.target.value)} />
            {error && !category && <span className='invalid-input'>Enter category</span>}
            <input type="text" placeholder='Enter product company' className='inputBox' value={company} onChange={(e) => setCompany(e.target.value)} />
            {error && !company && <span className='invalid-input'>Enter company name</span>}
            <button className='appButton' onClick={addProduct}>Add Product</button>
        </div>
    )
}



export default AddProduct
