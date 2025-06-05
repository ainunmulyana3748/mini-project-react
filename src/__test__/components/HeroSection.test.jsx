import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

import HeroSection from "../../components/HeroSection";

describe("HeroSection Component", () => {
  test("render judul, deskripsi, dan tombol", () => {
    render(
      <BrowserRouter>
        <HeroSection />
      </BrowserRouter>
    );
    expect(screen.getByText("Ditemenin.")).toBeInTheDocument();
    expect(
      screen.getByText(/Kemanapun dan kapanpun, mau jalan-jalan/)
    ).toBeInTheDocument();
    expect(screen.getByText("Lanjutkan")).toBeInTheDocument();
  });

  test("klik tombol Lanjutkan memanggil navigate", () => {
    render(
      <BrowserRouter>
        <HeroSection />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText("Lanjutkan"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });

  test("snapshot hero section", () => {
    const { container } = render(
      <BrowserRouter>
        <HeroSection />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
