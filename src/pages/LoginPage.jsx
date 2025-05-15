import React, { useState } from "react";
import InputForm from "../components/InputForm";
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const {
    handleEmail,
    handlePassword,
    handleSubmit,
    success,
    error,
    loading,
    email,
    password,
  } = useAuth();

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
        <InputForm
          label="Email"
          type="email"
          placeholder="@example.com"
          onchange={handleEmail}
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="Password"
          onchange={handlePassword}
        />
        <Button
          variant="primary"
          onclick={handleSubmit}
          disabled={!email || !password}
        >
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
