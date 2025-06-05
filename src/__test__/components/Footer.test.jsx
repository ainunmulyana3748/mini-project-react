import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Footer Component", () => {
  test("render brand, download app, dan kontak", () => {
    render(<Footer />);
    expect(screen.getByText("Ditemenin.")).toBeInTheDocument();
    expect(screen.getByText("Download Ditemenin App")).toBeInTheDocument();
    expect(screen.getByAltText("Get it on Google Play")).toBeInTheDocument();
    expect(
      screen.getByAltText("Download on the App Store")
    ).toBeInTheDocument();
    expect(screen.getByText("Kontak")).toBeInTheDocument();
    expect(
      screen.getByText("Email: support@ditemenin.com")
    ).toBeInTheDocument();
    expect(screen.getByText("Instagram: @ditemenin")).toBeInTheDocument();
  });

  test("copyright tahun sesuai tahun sekarang", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`${year} Ditemenin. All rights reserved.`))
    ).toBeInTheDocument();
  });

  test("snapshot footer", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
