import { render, screen } from "@testing-library/react";
import Destination from "../../components/Destination";

describe("Destination Component", () => {
  test("render semua destinasi dengan benar", () => {
    render(<Destination />);
    expect(screen.getByText("Tour Jepang")).toBeInTheDocument();
    expect(screen.getByText("Paris Experience")).toBeInTheDocument();
    expect(screen.getByText("Swiss Journey")).toBeInTheDocument();
    expect(screen.getByText("Iceland Adventure")).toBeInTheDocument();
    // Cek gambar
    expect(screen.getByAltText("Tour Jepang")).toBeInTheDocument();
    expect(screen.getByAltText("Paris Experience")).toBeInTheDocument();
    expect(screen.getByAltText("Swiss Journey")).toBeInTheDocument();
    expect(screen.getByAltText("Iceland Adventure")).toBeInTheDocument();
  });

  test("snapshot destination", () => {
    const { container } = render(<Destination />);
    expect(container).toMatchSnapshot();
  });
});
