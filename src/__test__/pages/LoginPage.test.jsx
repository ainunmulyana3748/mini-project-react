import { render, screen } from "@testing-library/react";
import LoginPage from "../../pages/LoginPage";

jest.mock("../../hooks/useAuthLogin", () => ({
  useAuthLogin: () => ({
    handleEmail: jest.fn(),
    handlePassword: jest.fn(),
    handleSubmit: jest.fn(),
    handleRole: jest.fn(),
    role: "",
    success: "",
    error: "",
    loading: false,
    email: "",
    password: "",
  }),
}));
jest.mock("../../components/AuthLayout", () => ({ children, ...props }) => (
  <div>
    <div>AuthLayout</div>
    {children}
  </div>
));
jest.mock("../../components/InputForm", () => (props) => <input {...props} />);
jest.mock("../../components/Button", () => (props) => (
  <button {...props}>{props.children}</button>
));

describe("LoginPage", () => {
  test("render form login dan tombol login", () => {
    render(<LoginPage />);
    expect(screen.getByText("AuthLayout")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Role")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
