import React, { useContext, useEffect, useState } from 'react'
import { Link, Redirect, useHistory } from "react-router-dom";
import { getItemFromLocalStorage, setItemToLocalStorage } from '../../utils/localStorage';
function SignIn({ setIsAuth }) {
    const [user, setUser] = useState({ Email: "", Password: "" })
    const history = useHistory();
    function handleClick(e) {
        e.preventDefault();
        const NewPassword = getItemFromLocalStorage('NewEmail');
        const UserPassword = getItemFromLocalStorage('NewPassword');
        if (user.Email === NewPassword && user.Password === UserPassword) {
            setItemToLocalStorage('userEmail', user.Email)
            setItemToLocalStorage('UserPassword', user.Password);

            setUser({ Email: "", Password: "" })
            setIsAuth(true)
            history.push("/dashboard");
        }
        else {
            alert("Invalid User")
        }
    }
    return (
        <div className="auther">
            <div className="container">
                <form className="white z-depth-2">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={user.Email} required onChange={e => {
                            const data = { ...user }
                            data.Email = (e.target.value)
                            setUser(data);
                        }
                        } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={user.Password} required onChange={e => {
                            const data = { ...user }
                            data.Password = (e.target.value)
                            setUser(data);
                        }
                        } />
                    </div>
                    <div className="input-field">
                        <Link onClick={handleClick} className="btn green lighten-1 text-dark  z-depth-0" to="/">Login</Link>
                        <Link className="btn red lighten-1 text-dark z-depth-0 mx-3" to="./signup">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn