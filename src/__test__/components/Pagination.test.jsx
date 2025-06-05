import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../../components/Pagination";

describe("Pagination Component", () => {
  const onPageChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("render tombol prev, next, dan nomor halaman", () => {
    render(
      <Pagination currentPage={2} totalPages={3} onPageChange={onPageChange} />
    );
    expect(screen.getByText("Prev")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("klik prev, next, dan nomor halaman memanggil onPageChange", () => {
    render(
      <Pagination currentPage={2} totalPages={3} onPageChange={onPageChange} />
    );
    fireEvent.click(screen.getByText("Prev"));
    expect(onPageChange).toHaveBeenCalledWith(1);
    fireEvent.click(screen.getByText("Next"));
    expect(onPageChange).toHaveBeenCalledWith(3);
    fireEvent.click(screen.getByText("1"));
    expect(onPageChange).toHaveBeenCalledWith(1);
    fireEvent.click(screen.getByText("3"));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  test("snapshot pagination", () => {
    const { container } = render(
      <Pagination currentPage={2} totalPages={3} onPageChange={onPageChange} />
    );
    expect(container).toMatchSnapshot();
  });
});
