import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
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
  return {
    handleEmail,
    handlePassword,
    handleSubmit,
    success,
    error,
    loading,
    email,
    password,
  };
};
