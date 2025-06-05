import { render, screen } from "@testing-library/react";
import TourGuidePage from "../../pages/TourGuidePage";

jest.mock("../../hooks/useUsers", () => ({
  useUsers: () => ({
    users: [
      {
        id: 1,
        first_name: "Budi",
        last_name: "Santoso",
        email: "budi@mail.com",
        avatar: "avatar.jpg",
      },
      {
        id: 2,
        first_name: "Siti",
        last_name: "Aisyah",
        email: "siti@mail.com",
        avatar: "avatar2.jpg",
      },
    ],
    totalPages: 1,
    getListUsers: jest.fn(),
    counter: 1,
    setCounter: jest.fn(),
  }),
}));
jest.mock("../../components/Navbar", () => () => <div>Navbar</div>);
jest.mock("../../components/Breadcrumb", () => () => <div>Breadcrumb</div>);
jest.mock("../../components/SearchInput", () => (props) => (
  <input
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
  />
));
jest.mock("../../components/Pagination", () => () => <div>Pagination</div>);
jest.mock("../../components/CardTourGuide", () => (props) => (
  <div>CardTourGuide {props.user.first_name}</div>
));
jest.mock("../../components/LoadingSpinner", () => () => (
  <div>LoadingSpinner</div>
));

describe("TourGuidePage", () => {
  test("render komponen utama dan CardTourGuide", () => {
    render(<TourGuidePage />);
    expect(screen.getByText("Navbar")).toBeInTheDocument();
    expect(screen.getByText("Breadcrumb")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Cari user...")).toBeInTheDocument();
    expect(screen.getByText("Pagination")).toBeInTheDocument();
    expect(screen.getByText("CardTourGuide Budi")).toBeInTheDocument();
    expect(screen.getByText("CardTourGuide Siti")).toBeInTheDocument();
  });
});
