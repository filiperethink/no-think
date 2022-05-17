import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "../../components";
import { useAuth } from "../../context/AuthContext";
import { LocationParams } from "../../types";

import Form from "./components/Form/Form";
import Presentantion from "./components/Presentation/Presentantion";

function LoginScreen() {
  let navigate = useNavigate();

  let location: LocationParams = useLocation();
  let auth = useAuth();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = () =>
    auth.signin("Filipe", () => navigate(from, { replace: true }));

  useEffect(() => {
    const newUser = localStorage.getItem("@nothink:user");
    if (newUser) {
      auth.signin(newUser.toString(), () =>
        navigate("/dashboard", { replace: true })
      );
    }
  }, [auth, from, navigate]);

  return (
    <Container>
      <Presentantion />
      <Form onClick={handleSubmit} />
    </Container>
  );
}

export default LoginScreen;
