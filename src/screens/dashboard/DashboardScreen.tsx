import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function DashboardScreen() {
  const auth = useAuth();
  let navigate = useNavigate();

  const onSignout = () => {
    auth.signout(() => navigate("/"));
  };
  return (
    <div>
      <h1>DashboardScreen</h1>
      <div>{auth.user}</div>
      <button onClick={onSignout} className='logout'>
        Logut
      </button>
    </div>
  );
}

export default DashboardScreen;
