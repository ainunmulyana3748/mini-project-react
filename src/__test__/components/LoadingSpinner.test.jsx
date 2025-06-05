import { render } from "@testing-library/react";
import LoadingSpinner from "../../components/LoadingSpinner";

describe("LoadingSpinner Component", () => {
  test("render spinner", () => {
    const { container } = render(<LoadingSpinner />);
    // Cek ada elemen dengan class animate-spin
    expect(container.querySelector(".animate-spin")).toBeInTheDocument();
  });

  test("snapshot spinner", () => {
    const { container } = render(<LoadingSpinner />);
    expect(container).toMatchSnapshot();
  });
});
