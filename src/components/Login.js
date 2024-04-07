import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {error && alert(`${error}`)}
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>Email</td>
            <td>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit"></input>
            </td>
          </tr>
        </table>
      </form>
      <br></br>
      <br></br>
      <table>
        <tr>
          <td></td>
          <td>
            <button>
              <Link to="/signup">Register</Link>
            </button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
          </td>
        </tr>
      </table>
    </>
  );
}
