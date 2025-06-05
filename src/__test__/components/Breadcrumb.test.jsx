import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

describe("Breadcrumb Component", () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Current Page" },
  ];

  test("render semua item breadcrumb dengan benar", () => {
    render(
      <BrowserRouter>
        <Breadcrumb items={items} />
      </BrowserRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Current Page")).toBeInTheDocument();
  });

  test("item dengan href menjadi link, tanpa href menjadi span", () => {
    render(
      <BrowserRouter>
        <Breadcrumb items={items} />
      </BrowserRouter>
    );
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Dashboard").closest("a")).toHaveAttribute(
      "href",
      "/dashboard"
    );
    expect(screen.getByText("Current Page").tagName).toBe("SPAN");
  });

  test("snapshot breadcrumb", () => {
    const { container } = render(
      <BrowserRouter>
        <Breadcrumb items={items} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
