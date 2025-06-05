import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../../components/SearchInput";

describe("SearchInput Component", () => {
  test("render input dengan placeholder", () => {
    render(
      <SearchInput value="" onChange={() => {}} placeholder="Cari sesuatu..." />
    );
    expect(screen.getByPlaceholderText("Cari sesuatu...")).toBeInTheDocument();
  });

  test("onChange dijalankan saat mengetik", () => {
    const handleChange = jest.fn();
    render(<SearchInput value="" onChange={handleChange} />);
    fireEvent.change(screen.getByPlaceholderText("Cari..."), {
      target: { value: "abc" },
    });
    expect(handleChange).toHaveBeenCalled();
  });

  test("snapshot search input", () => {
    const { container } = render(<SearchInput value="" onChange={() => {}} />);
    expect(container).toMatchSnapshot();
  });
});
