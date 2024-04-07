import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "./UserAuthContext";

export default function Home() {

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

    return (
      <div>
         Welcome <br />
        {user && user.email}
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }
