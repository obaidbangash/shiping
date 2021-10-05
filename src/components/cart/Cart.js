import React, { useEffect } from 'react'
import { fetchProduct, AddProduct, RemoveProduct, fetchSingleProduct, AddCart } from '../../redux/action/ProductAction';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



function Cart() {
    const dispatch = useDispatch();
    const item = useSelector(state => state.ProductReducer.add_cart);

    // const { id } = useParams()
    console.log(item, "cart data ")

    return (
        <section className="main-section">
            {item?.map((item) => <h1>{item.id}</h1>)}
        </section>
    )
}

export default Cart
