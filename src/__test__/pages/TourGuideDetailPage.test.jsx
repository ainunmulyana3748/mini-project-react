// tests/pages/TourGuideDetailPage.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TourGuideDetailPage from "../../pages/TourGuideDetailPage";
import { MemoryRouter } from "react-router-dom";

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

// Mock hooks
jest.mock("../../hooks/useUserDetail", () => ({
  useUserDetail: () => ({
    user: {
      id: 1,
      first_name: "Budi",
      last_name: "Santoso",
      email: "budi@mail.com",
    },
    fetchUserDetail: jest.fn(),
    loading: false,
    error: null,
  }),
}));

// Mock Components
jest.mock("../../components/Breadcrumb", () => () => <div>Breadcrumb</div>);
jest.mock("../../components/LoadingSpinner", () => () => (
  <div>LoadingSpinner</div>
));
jest.mock("../../components/CardUserDetail", () => (props) => (
  <div>
    CardUserDetail {props.user.first_name}
    {props.button}
  </div>
));
jest.mock("../../components/Button", () => (props) => (
  <button onClick={props.onClick}>{props.children}</button>
));
jest.mock("../../components/SuccessModal", () => (props) => (
  <div>SuccessModal: {props.title}</div>
));
jest.mock("../../components/ConfirmModal", () => (props) => (
  <div>
    ConfirmModal: {props.title}
    <button onClick={props.onConfirm}>Confirm</button>
    <button onClick={props.onCancel}>Cancel</button>
  </div>
));
jest.mock("../../components/EditData", () => () => (
  <div>EditData Component</div>
));

beforeEach(() => {
  localStorage.setItem("role", "admin"); // atau "customer"
});

describe("TourGuideDetailPage", () => {
  test("renders user detail and buttons for admin role", () => {
    render(<TourGuideDetailPage />, { wrapper: MemoryRouter });

    expect(screen.getByText("Breadcrumb")).toBeInTheDocument();
    expect(screen.getByText("CardUserDetail Budi")).toBeInTheDocument();
    expect(screen.getByText("Edit Profile")).toBeInTheDocument();
    expect(screen.getByText("Delete Guide")).toBeInTheDocument();
  });

  test("shows success modal on delete confirm", async () => {
    render(<TourGuideDetailPage />, { wrapper: MemoryRouter });

    fireEvent.click(screen.getByText("Delete Guide"));

    expect(screen.getByText("ConfirmModal: Are you sure?")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Confirm"));
    await waitFor(() =>
      expect(
        screen.getByText("SuccessModal: Delete Successful!")
      ).toBeInTheDocument()
    );
  });

  test("shows success booking modal for customer", async () => {
    localStorage.setItem("role", "customer");
    render(<TourGuideDetailPage />, { wrapper: MemoryRouter });

    fireEvent.click(screen.getByText("Booking Now!"));
    expect(
      screen.getByText("SuccessModal: Booking Confirmed!")
    ).toBeInTheDocument();
    await waitFor(() =>
      expect(mockNavigate).toHaveBeenCalledWith("/landing-page")
    );
  });
});
