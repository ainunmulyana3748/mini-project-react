import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("AuthLayout Component", () => {
  const defaultProps = {
    title: "Login",
    description: "Welcome back",
    children: <div>Login Form</div>,
    footerText: "Don't have an account? ",
    footerLink: "/register",
    footerLinkText: "Register here",
  };

  beforeEach(() => {
    // Clear mock before each test
    mockedUsedNavigate.mockClear();
  });

  test("renders with all props correctly", () => {
    render(
      <BrowserRouter>
        <AuthLayout {...defaultProps} />
      </BrowserRouter>
    );

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    expect(screen.getByText("Login Form")).toBeInTheDocument();
    expect(screen.getByText(/Don't have an account?/)).toBeInTheDocument();
    expect(screen.getByText("Register here")).toBeInTheDocument();
  });

  test("navigates back when back button is clicked", () => {
    render(
      <BrowserRouter>
        <AuthLayout {...defaultProps} />
      </BrowserRouter>
    );

    const backButton = screen.getByTestId("back-button");
    fireEvent.click(backButton);

    expect(mockedUsedNavigate).toHaveBeenCalledWith(-1);
  });

  test("renders without footer when footer props are not provided", () => {
    const propsWithoutFooter = {
      title: "Login",
      description: "Welcome back",
      children: <div>Login Form</div>,
    };

    render(
      <BrowserRouter>
        <AuthLayout {...propsWithoutFooter} />
      </BrowserRouter>
    );

    expect(
      screen.queryByText(/Don't have an account?/)
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Register here")).not.toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <AuthLayout {...defaultProps} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
