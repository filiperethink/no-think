import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LocationParams } from "../../types";

function LoginScreen() {
  let navigate = useNavigate();

  let location: LocationParams = useLocation();
  let auth = useAuth();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = () =>
    auth.signin("Filipe", () => navigate(from, { replace: true }));

  useEffect(() => {
    const newUser = localStorage.getItem("@nothink:user");
    console.log({ newUser });
    if (newUser) {
      auth.signin(newUser?.toString()!, () =>
        navigate("/dashboard", { replace: true })
      );
    }
  }, [auth, from, navigate]);

  return (
    <div>
      <div onClick={handleSubmit}>LoginScreen</div>
    </div>
  );
}

export default LoginScreen;
