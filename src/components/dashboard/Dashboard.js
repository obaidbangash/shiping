import React, { useEffect, useState } from 'react'
import axios from "axios"
function Dashboard() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(response => { setProduct(response.data) }).catch(error => alert(error));
        console.log(product, "products")
    }, [])
    return (
        <div className="row">
            {product?.map(item => <div className="col-md-4 mb-5"><img style={{ background: `url(${item.image})`, width: "100%", height: "400px" }} /></div>)}
        </div>
    )
}

export default Dashboard
