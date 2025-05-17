import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRole = (e) => setRole(e.target.value);

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
        "https://reqres.in/api/register",
        payload,
        {
          headers: headers,
        }
      );
      localStorage.setItem("token", response.data.token);
      setSuccess("Register Success");
      setError("");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setError(error.response.data.error);
      setSuccess("");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    handleEmail,
    handlePassword,
    handleSubmit,
    handleRole,
    success,
    error,
    loading,
    email,
    password,
    role,
  };
};
