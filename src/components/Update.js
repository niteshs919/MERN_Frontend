import React, { useEffect } from 'react'
import { useState  } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
const Update = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [company, setCompany] = useState('')
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        getProductDetail();
    },[])
    const getProductDetail =async()=>{
        let result = await fetch(`http://localhost:8085/products/${params.id}`)
        result = await result.json()
        setName(result.name);
        setPrice(result.price);
        setCompany(result.company);
        setCategory(result.category);
    }
    const updatProduct =async () => {
        let result = await fetch(`http://localhost:8085/products/${params.id}`,{
            method:"Put",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'Application/json'
            }
        })
        result = await result.json();
        if(result){
            navigate('/')
        }
    }
    return (
        <div className='product'>
            <h1>Update Product</h1>
            <input type="text" placeholder='Enter product name' className='inputBox' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Enter product price' className='inputBox' value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder='Enter product category' className='inputBox' value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="text" placeholder='Enter product company' className='inputBox' value={company} onChange={(e) => setCompany(e.target.value)} />
            <button className='appButton' onClick={updatProduct}>Add Product</button>
        </div>
    )
}

export default Update
