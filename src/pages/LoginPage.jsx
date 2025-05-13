import React, { useState } from "react";
import Input from "../components/InputForm";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      email: email,
      password: password,
    };

    const headers = {
      "x-api-key": "reqres-free-v1",
    };

    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        payload,
        {
          headers: headers,
        }
      );
      localStorage.setItem("token", response.data.token);
      setSuccess("Login Success");
      setError("");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      setError(error.response.data.error);
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Login"
      description="Enter your email below to login to your account"
      footerText="Don't have an account?"
      footerLink="/register"
      footerLinkText="Sign up"
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
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
