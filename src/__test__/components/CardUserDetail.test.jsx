import { render, screen, fireEvent } from "@testing-library/react";
import CardUserDetail from "../../components/CardUserDetail";
import { BrowserRouter } from "react-router-dom";

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("CardUserDetail Component", () => {
  const user = {
    id: 2,
    avatar: "https://example.com/avatar2.jpg",
    email: "user@mail.com",
    first_name: "Siti",
    last_name: "Aisyah",
  };

  test("render nama, email, avatar, rating, dan languages", () => {
    render(
      <BrowserRouter>
        <CardUserDetail user={user} />
      </BrowserRouter>
    );
    expect(screen.getByText("Siti Aisyah")).toBeInTheDocument();
    expect(screen.getByText("user@mail.com")).toBeInTheDocument();
    expect(screen.getByAltText("Siti")).toHaveAttribute("src", user.avatar);
    expect(screen.getByText("4.5/5.0")).toBeInTheDocument();
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("Bahasa Indonesia")).toBeInTheDocument();
    expect(screen.getByText("French")).toBeInTheDocument();
  });

  test("navigasi back saat tombol back diklik", () => {
    render(
      <BrowserRouter>
        <CardUserDetail user={user} />
      </BrowserRouter>
    );
    const backButton = screen.getByRole("img", { hidden: true }); // ArrowLeft
    fireEvent.click(backButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith(-1);
  });

  test("render children pada props button", () => {
    render(
      <BrowserRouter>
        <CardUserDetail user={user} button={<button>Test Button</button>} />
      </BrowserRouter>
    );
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  test("snapshot card user detail", () => {
    const { container } = render(
      <BrowserRouter>
        <CardUserDetail user={user} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
