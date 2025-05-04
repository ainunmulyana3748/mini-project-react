import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import AuthLayout from "../components/AuthLayout";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
    };

    const headers = {
      "x-api-key": "reqres-free-v1",
    };

    try {
      await axios.post("https://reqres.in/api/register", payload, {
        headers,
      });

      setSuccess("Register success");
      setError("");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setError("Register failed", error.response.data);
      setSuccess("");
    }
  };

  return (
    <AuthLayout
      title="Register"
      description="Enter your email below to register to your account"
      footerText="Do you have an account?"
      footerLink="/login"
      footerLinkText="Login"
    >
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="@example.com"
          onchange={handleEmail}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          onchange={handlePassword}
        />
        <Button variant="primary" onclick={handleSubmit}>
          Register
        </Button>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
