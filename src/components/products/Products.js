import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct, AddProduct, RemoveProduct, fetchSingleProduct } from '../../redux/action/ProductAction';
import { Link, useParams } from 'react-router-dom';

function Products() {
    const item = useSelector(state => state.ProductReducer.singleProduct);
    const dispatch = useDispatch()

    const { id } = useParams()
    useEffect(() => {

        dispatch(fetchSingleProduct(id));
        // dispatch(fetchProduct());

    }, []);
    return (
        <section className="product-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 border">
                        <div className="product-img ">
                            <img src={item?.image} alt="" style={{ width: "100%" }} />
                        </div>
                    </div>
                    <div className="col-md-6 offset-1">
                        <div className="product-detials">
                            <h2>{item?.title}</h2>
                            <div className="row">
                                <div className="col-md-6"><b>Category</b></div>
                                <div className="col-md-6">{item?.category}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6"><b>Price:</b></div>
                                <div className="col-md-6">{item?.price}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6"><b>Rating</b></div>
                                <div className="col-md-6">{item?.rating && item?.rating.rate}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6"><b>Count</b></div>
                                <div className="col-md-6">{item?.rating && item.rating?.count}</div>
                            </div>
                            <div>  {item?.description}</div>
                            <button className="btn btn-danger my-4" onClick={() => {
                                dispatch(AddProduct())
                            }}> Add to Cart </button>
                            <Link to="/cart" className="btn btn-danger mx-3 my-4"> Cart </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Products
