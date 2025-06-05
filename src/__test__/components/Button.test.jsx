import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button Component", () => {
  test("render children dengan benar", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("render dengan variant primary secara default", () => {
    render(<Button>Primary</Button>);
    expect(screen.getByText("Primary")).toHaveClass("bg-black");
  });

  test("render dengan variant secondary", () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByText("Secondary")).toHaveClass("bg-white");
  });

  test("render dengan variant danger", () => {
    render(<Button variant="danger">Danger</Button>);
    expect(screen.getByText("Danger")).toHaveClass("bg-red-500");
  });

  test("onClick dijalankan saat button diklik", () => {
    const handleClick = jest.fn();
    render(<Button onclick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalled();
  });

  test("button disabled tidak bisa diklik", () => {
    const handleClick = jest.fn();
    render(
      <Button onclick={handleClick} disabled>
        Disabled
      </Button>
    );
    const btn = screen.getByText("Disabled");
    expect(btn).toBeDisabled();
    fireEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("snapshot button", () => {
    const { container } = render(<Button>Snapshot</Button>);
    expect(container).toMatchSnapshot();
  });
});
