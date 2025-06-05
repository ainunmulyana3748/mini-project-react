import { render, screen, fireEvent } from "@testing-library/react";
import CarouselCard from "../../components/CarouselCard";
import { BrowserRouter } from "react-router-dom";

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// Perbaiki mock Swiper
jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}));

jest.mock("swiper/modules", () => ({
  Navigation: jest.fn(),
  Pagination: jest.fn(),
}));

describe("CarouselCard Component", () => {
  const users = [
    {
      id: 1,
      avatar: "https://example.com/avatar1.jpg",
      email: "user1@mail.com",
      first_name: "Andi",
      last_name: "Wijaya",
    },
    {
      id: 2,
      avatar: "https://example.com/avatar2.jpg",
      email: "user2@mail.com",
      first_name: "Budi",
      last_name: "Santoso",
    },
  ];

  test("render nama, email, dan avatar user dengan benar", () => {
    render(
      <BrowserRouter>
        <CarouselCard users={users} />
      </BrowserRouter>
    );

    // Cari berdasarkan format yang diharapkan: "Andi Wijaya"
    expect(screen.getByText("Andi Wijaya")).toBeInTheDocument();
    expect(screen.getByText("user1@mail.com")).toBeInTheDocument();
    expect(screen.getByAltText("Andi Wijaya")).toHaveAttribute(
      "src",
      users[0].avatar
    );

    expect(screen.getByText("Budi Santoso")).toBeInTheDocument();
    expect(screen.getByText("user2@mail.com")).toBeInTheDocument();
    expect(screen.getByAltText("Budi Santoso")).toHaveAttribute(
      "src",
      users[1].avatar
    );
  });

  test("klik Order Now memanggil navigate", () => {
    render(
      <BrowserRouter>
        <CarouselCard users={users} />
      </BrowserRouter>
    );

    // Cari semua tombol Order Now
    const orderButtons = screen.getAllByText("Order Now");

    // Klik tombol pertama
    fireEvent.click(orderButtons[0]);

    // Verifikasi navigasi dipanggil dengan path yang benar
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/users/1");
  });

  test("snapshot carousel card", () => {
    const { container } = render(
      <BrowserRouter>
        <CarouselCard users={users} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
