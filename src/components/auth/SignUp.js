import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { setItemToLocalStorage } from '../../utils/localStorage';
function SignUp({ setIsAuth, auth }) {
    const history = useHistory();
    const user = { Name: '', Email: "", Password: '', Confirm: "", }
    const [userData, setUserData] = useState(user);
    const SubmitForm = (e) => {
        e.preventDefault();

        if (userData.Name && userData.Email && userData.Password && userData.Confirm) {
            setItemToLocalStorage('NewUser', userData.Name)
            setItemToLocalStorage('NewEmail', userData.Email);
            setItemToLocalStorage('Confirm', userData.Confirm)
            setItemToLocalStorage('NewPassword', userData.Password);
            // setItemToLocalStorage("isAuth", (true));
            // setItemToLocalStorage("newAuth", (true))
            setUserData(user)
            setIsAuth(true);
            setItemToLocalStorage("isAuth", (true))
            history.push("/dashboard");
        }
        else {
            alert("please fill up the blanks")
        }
    };

    const Account = () => {
        // setItemToLocalStorage("isAuth", (true));
        // setItemToLocalStorage("newAuth", (false));
    }
    const [value, setValue] = useState('')
    return (
        <div className="auther  ">
            <div className="container">
                <form className="white z-depth-2 ">
                    <h1 className="grey-text text-darken-3">Sign Up </h1>
                    <div className="input-field">
                        <label htmlFor="firstname">{value ? value : "Full Name"}</label>
                        <input type="text" required value={userData.Name} onChange={(e) => {

                            const data = { ...userData }
                            data.Name = e.target.value;
                            setUserData(data);

                        }
                        }
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="Email" value={userData.Email} onChange={(e) => {
                            const data = { ...userData }
                            data.Email = e.target.value;
                            setUserData(data);

                        }
                        } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={userData.Password} onChange={(e) => {
                            const data = { ...userData }
                            data.Password = e.target.value;
                            setUserData(data);

                        }
                        } />
                    </div>

                    <div className="input-field">
                        <label htmlFor="Comfirm">Confirm Password</label>
                        <input type="password" value={userData.Confirm} onChange={(e) => {
                            const data = { ...userData }
                            data.Confirm = e.target.value;
                            setUserData(data);

                        }
                        } />
                    </div>
                    <div className="input-field mt-5">
                        <button onClick={(e) => SubmitForm(e)} className="btn green lighten-1 z-depth-0">Sign Up</button>
                        <Link className="btn red  lighten-1 text-dark z-depth-2 mx-3" onClick={() => { Account() }} to="./signin">Already an Account</Link>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp