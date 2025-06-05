import { render, screen, fireEvent } from "@testing-library/react";
import ConfirmModal from "../../components/ConfirmModal";

describe("ConfirmModal Component", () => {
  const defaultProps = {
    title: "Konfirmasi",
    message: "Apakah Anda yakin?",
    onConfirm: jest.fn(),
    onCancel: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("render dengan type delete (default)", () => {
    render(<ConfirmModal {...defaultProps} />);
    expect(screen.getByText("Konfirmasi")).toBeInTheDocument();
    expect(screen.getByText("Apakah Anda yakin?")).toBeInTheDocument();
    expect(screen.getByText("Yes, Delete")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  test("render dengan type edit", () => {
    render(<ConfirmModal {...defaultProps} type="edit" />);
    expect(screen.getByText("Yes, Save")).toBeInTheDocument();
  });

  test("klik tombol Cancel memanggil onCancel", () => {
    render(<ConfirmModal {...defaultProps} />);
    fireEvent.click(screen.getByText("Cancel"));
    expect(defaultProps.onCancel).toHaveBeenCalled();
  });

  test("klik tombol Confirm memanggil onConfirm", () => {
    render(<ConfirmModal {...defaultProps} />);
    fireEvent.click(screen.getByText("Yes, Delete"));
    expect(defaultProps.onConfirm).toHaveBeenCalled();
  });

  test("snapshot confirm modal", () => {
    const { container } = render(<ConfirmModal {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
