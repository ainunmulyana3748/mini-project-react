import { render, screen } from "@testing-library/react";
import LandingPage from "../../pages/LandingPage";

jest.mock("../../hooks/useUsers", () => ({
  useUsers: () => ({ users: [], getListUsers: jest.fn() }),
}));
jest.mock("../../components/Navbar", () => () => <div>Navbar</div>);
jest.mock("../../components/Footer", () => () => <div>Footer</div>);
jest.mock("../../components/HeroSection", () => () => <div>HeroSection</div>);
jest.mock("../../components/Destination", () => () => <div>Destination</div>);
jest.mock("../../components/CarouselCard", () => () => <div>CarouselCard</div>);

describe("LandingPage", () => {
  test("render semua komponen utama", () => {
    render(<LandingPage />);
    expect(screen.getByText("Navbar")).toBeInTheDocument();
    expect(screen.getByText("HeroSection")).toBeInTheDocument();
    expect(screen.getByText("Destination")).toBeInTheDocument();
    expect(screen.getByText("CarouselCard")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  test("render judul utama", () => {
    render(<LandingPage />);
    expect(
      screen.getByText(
        "Maksimalkan Rencanamu, Ditemenin oleh Tour Guide Profesional"
      )
    ).toBeInTheDocument();
  });
});
