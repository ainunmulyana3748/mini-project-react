import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../../components/Navbar";
import { BrowserRouter } from "react-router-dom";

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => (store[key] = value + ""),
    removeItem: (key) => delete store[key],
    clear: () => (store = {}),
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("Navbar Component", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("render brand dan menu desktop (belum login)", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("Ditemenin.")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Our Tour Guide")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("render tombol Logout jika sudah login", () => {
    window.localStorage.setItem("token", "abc");
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  test("klik tombol menu mobile membuka menu", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const menuBtn = screen.getByRole("button");
    fireEvent.click(menuBtn);
    expect(screen.getAllByText("Home").length).toBeGreaterThan(1); // Ada di mobile menu
  });

  test("klik tombol Logout menghapus token", () => {
    window.localStorage.setItem("token", "abc");
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText("Logout"));
    expect(window.localStorage.getItem("token")).toBeNull();
  });

  test("snapshot navbar", () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
