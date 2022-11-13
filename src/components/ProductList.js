import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
const ProductList = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        let result = await fetch("http://localhost:8085/products")
        result = await result.json();
        setProducts(result);
        //console.log("result",result);
    }

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:8085/products/${id}`, {
            method: "Delete"
        })
        result = await result.json();
        if (result) {
            alert("Record is deleted");
            getProducts();
        }
    }

    const handleSearch = async(e) => {
        if(e.target.value){
            let result = await fetch(`http://localhost:8085/search/${e.target.value}`)
            result = await result.json();
            if(result){
               setProducts(result);
            }
        }
        else{
            getProducts();
        }
       
    }
    return (
        <div className='product-list'>
            <h3>Product List</h3>
            <input type="text" className='search-product-box' placeholder='Search Product' onChange={handleSearch}/>
            <ul>
                <li>S. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
              products.length>0 ?  products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li><button onClick={() => deleteProduct(item._id)}>Delete</button>
                        <Link to={"/update/"+item._id}>Update</Link></li>
                    </ul>
                ):<h1>No Data Found</h1>
            }
        </div>
    )
}

export default ProductList
