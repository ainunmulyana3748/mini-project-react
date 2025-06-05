import { render, screen, fireEvent } from "@testing-library/react";

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

import NotFoundPage from "../../pages/NotFoundPage";

describe("NotFoundPage", () => {
  test("render judul 404, pesan, dan tombol kembali", () => {
    render(<NotFoundPage />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Halaman tidak ditemukan")).toBeInTheDocument();
    expect(screen.getByText("Kembali ke Beranda")).toBeInTheDocument();
  });

  test("klik tombol kembali memanggil navigate", () => {
    render(<NotFoundPage />);
    fireEvent.click(screen.getByText("Kembali ke Beranda"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/landing-page");
  });
});
