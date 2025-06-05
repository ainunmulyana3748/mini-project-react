import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EditData from "../../components/EditData";
import { BrowserRouter } from "react-router-dom";

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("EditData Component", () => {
  const user = {
    first_name: "John",
    last_name: "Doe",
    email: "john@example.com",
  };
  const onClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("render form dengan data user", () => {
    render(
      <BrowserRouter>
        <EditData user={user} onclick={onClose} />
      </BrowserRouter>
    );
    expect(screen.getByDisplayValue("John")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Doe")).toBeInTheDocument();
    expect(screen.getByDisplayValue("john@example.com")).toBeInTheDocument();
  });

  test("ubah input dan klik Edit muncul ConfirmModal", () => {
    render(
      <BrowserRouter>
        <EditData user={user} onclick={onClose} />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByPlaceholderText("John"), {
      target: { value: "Jane" },
    });
    fireEvent.click(screen.getByText("Edit"));
    expect(screen.getByText("Confirm Changes")).toBeInTheDocument();
  });

  test("klik Cancel di ConfirmModal menutup modal", () => {
    render(
      <BrowserRouter>
        <EditData user={user} onclick={onClose} />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText("Edit"));
    fireEvent.click(screen.getByText("Cancel"));
    expect(screen.queryByText("Confirm Changes")).not.toBeInTheDocument();
  });

  test("klik Confirm di ConfirmModal muncul SuccessModal dan redirect", async () => {
    jest.useFakeTimers();
    render(
      <BrowserRouter>
        <EditData user={user} onclick={onClose} />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText("Edit"));
    fireEvent.click(screen.getByText("Yes, Save"));
    expect(screen.getByText("Edit Successful!")).toBeInTheDocument();
    // Simulasi timeout
    jest.runAllTimers();
    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
    });
    jest.useRealTimers();
  });

  test("klik tombol close (X) memanggil onclick", () => {
    render(
      <BrowserRouter>
        <EditData user={user} onclick={onClose} />
      </BrowserRouter>
    );
    const closeBtn = screen.getByRole("img", { hidden: true });
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });

  test("snapshot edit data", () => {
    const { container } = render(
      <BrowserRouter>
        <EditData user={user} onclick={onClose} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
