import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CardTourGuide from "../../components/CardTourGuide";

describe("CardTourGuide Component", () => {
  const user = {
    id: 1,
    avatar: "https://example.com/avatar.jpg",
    email: "tourguide@mail.com",
    first_name: "Budi",
    last_name: "Santoso",
  };

  test("render nama, email, dan avatar dengan benar", () => {
    render(
      <BrowserRouter>
        <CardTourGuide user={user} />
      </BrowserRouter>
    );
    expect(screen.getByText("Budi Santoso")).toBeInTheDocument();
    expect(screen.getByText("tourguide@mail.com")).toBeInTheDocument();
    const img = screen.getByAltText("Budi Santoso");
    expect(img).toHaveAttribute("src", user.avatar);
  });

  test("link menuju ke /users/{id}", () => {
    render(
      <BrowserRouter>
        <CardTourGuide user={user} />
      </BrowserRouter>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "users/1");
  });

  test("snapshot card tour guide", () => {
    const { container } = render(
      <BrowserRouter>
        <CardTourGuide user={user} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
