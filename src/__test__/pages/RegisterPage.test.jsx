import { render, screen } from "@testing-library/react";
import RegisterPage from "../../pages/RegisterPage";

jest.mock("../../hooks/useAuthRegister", () => ({
  useAuthRegister: () => ({
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

describe("RegisterPage", () => {
  test("render form register dan tombol register", () => {
    render(<RegisterPage />);
    expect(screen.getByText("AuthLayout")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Role")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });
});
