import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { getItemFromLocalStorage } from '../../utils/localStorage';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct, AddProduct, RemoveProduct } from '../../redux/action/ProductAction';


export default function LetterAvatars() {
    const count = useSelector(state => state.ProductCount.count);

    const name = getItemFromLocalStorage('userEmail');
    const newUser = getItemFromLocalStorage("NewUser")
    return (
        <div style={{ width: "100px" }} className="d-flex justify-content-between align-items-center">
            <Link to="/cart"><i className="shopping-cart fa fa-shopping-cart"> <span>{count}</span></i> </Link>
            <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>{name ? name?.slice(0, 2) : newUser?.slice(0, 2)}</Avatar>
            </Stack>
        </div>
    );
}