import React, { useEffect, useState } from 'react'
import axios from "axios"
import { fetchProduct, AddProduct, RemoveProduct, AddCart } from '../../redux/action/ProductAction';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Dashboard() {
    const dispatch = useDispatch()
    const product = useSelector(state => state.ProductReducer.product);
    const loading = useSelector(state => state.ProductReducer.loading);
    const error = useSelector(state => state.ProductReducer.error);

    const count = useSelector(state => state.ProductCount.count);
    console.log(product)
    // setCart(count)
    useEffect(() => {
        dispatch(fetchProduct());
        // dispatch(fetchProduct());

    }, []);
    const [cart, setCart] = useState();

    return (
        <div className="container">
            <div className="row">
                {loading ? <h1>LOADING....</h1> : product?.map(item => <div className="col-md-4 mb-5" key={item.id}>
                    <div className="product-wrapper" >
                        <div className="product-img">
                            <img src={item.image} />
                        </div>
                        <div className="product-details" >
                            <h4> {item.category}</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <span><b>Price:</b> {item.price}</span>
                                </div>
                                <div className="col-md-6">
                                    <span><b>Rating:</b> {item.rating.rate}</span>
                                </div>
                            </div>

                            <Link to="/" className="btn btn-danger mx-2" onClick={(e) => {
                                e.preventDefault();
                                dispatch(AddCart(item.id));
                                dispatch(AddProduct())
                            }}> ADD to Cartt </Link>
                            <Link to={`/products/${item.id}`} className="btn btn-danger mx-2">View Product</Link>
                            {/* <div className="row justify-content-center">
                                <div className="col-md-2">
                                    <button onClick={() => {
                                        dispatch(RemoveProduct())
                                    }} className="btn btn-dark text-white" >-</button>
                                </div>
                                <div className="col-md-3">
                                    <input placeholder="0" value={count} type="number" className="border form-control text-center" />
                                </div>
                                <div className="col-md-2">
                                    <button onClick={(id) => {
                                        if (id) {
                                            dispatch(AddProduct(item.id))
                                        }
                                    }} className="btn btn-dark text-white">+</button>

                                </div>
                            </div> */}
                        </div>
                    </div>


                </div>)}

            </div>
        </div>
    )
}

export default Dashboard
