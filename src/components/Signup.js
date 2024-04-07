
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

export default function Signup(){
    const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

    return(
        <>
        {error && alert(`${error}`)}
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Email</td>
                        <td><input type="email" onChange={(e) => setEmail(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" onChange={(e) => setPassword(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type='submit'></input></td>
                    </tr>
                </table>
            </form>
            <br></br><br></br>
            <table >
                <tr>
                    <td></td>
                    <td><button><Link to='/'>Login</Link></button></td>
                </tr>
            </table>
        </>
    )
}