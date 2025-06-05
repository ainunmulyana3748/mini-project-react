import { render, screen } from "@testing-library/react";
import ProtectedRoute from "../../components/ProtectedRoute";
import { MemoryRouter } from "react-router-dom";

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

describe("ProtectedRoute Component", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("redirect ke /login jika tidak ada token", () => {
    render(
      <MemoryRouter initialEntries={["/protected"]}>
        <ProtectedRoute />
      </MemoryRouter>
    );
    expect(screen.queryByText("Protected Content")).not.toBeInTheDocument();
  });

  test("render children jika ada token", () => {
    window.localStorage.setItem("token", "abc");
    render(
      <MemoryRouter initialEntries={["/protected"]}>
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </MemoryRouter>
    );
    expect(screen.getByText("Protected Content")).toBeInTheDocument();
  });
});
