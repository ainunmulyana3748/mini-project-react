import InputForm from "../components/InputForm";
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";
import { useAuthRegister } from "../hooks/useAuthRegister";

const RegisterPage = () => {
  const {
    handleEmail,
    handlePassword,
    handleSubmit,
    handleRole,
    role,
    success,
    error,
    loading,
    email,
    password,
  } = useAuthRegister();

  return (
    <AuthLayout
      title="Register"
      description="Enter your email below to register to your account"
      footerText="Do you have an account?"
      footerLink="/login"
      footerLinkText="Login"
    >
      {error && (
        <div className="flex items-center gap-3 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl shadow-sm mb-4 animate-fade-in">
          <span className="text-xl">❌</span>
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {success && (
        <div className="flex items-center gap-3 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl shadow-sm mb-4 animate-fade-in">
          <span className="text-xl">✅</span>
          <p className="text-sm font-medium">{success}</p>
        </div>
      )}

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

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={handleRole}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="">Pilih Role</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
        </div>

        <Button
          variant="primary"
          onclick={handleSubmit}
          disabled={!email || !password}
        >
          {loading ? "Loading..." : "Register"}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
