import React from 'react'
import { Link, Redirect } from "react-router-dom";
import { getItemFromLocalStorage, removeItemFromLocalStorage, setItemToLocalStorage } from '../../utils/localStorage';
import LetterAvatars from './Avatar';
export default function Header({ setIsAuth }) {
    const userAuth = getItemFromLocalStorage("Auth");
    const SignOut = () => {
        removeItemFromLocalStorage("UserPassword")
        removeItemFromLocalStorage("isAuth")
        removeItemFromLocalStorage("userEmail");
        // removeItemFromLocalStorage("NewUser");
        setIsAuth(false)
    }

    return (
        <>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between bg-none">
                        <div className="logo ">
                            <h1 className="m-0"><Link to="/">OB Store</Link></h1>
                        </div>
                        <ul className="d-flex text-white m-0 p-0">
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/signin" onClick={() => SignOut()}>Sign Out</Link></li>
                            {/* <li><Link to="/">Sign In</Link></li>
                            
                            */}
                            {/* <li></li> */}

                        </ul>

                        <LetterAvatars />
                    </div>
                </div>
            </nav>
        </>
    )
}


