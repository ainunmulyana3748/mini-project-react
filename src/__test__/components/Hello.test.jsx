import { render } from "@testing-library/react";
import Hello from "../../components/Hello";

test("snapshot test", () => {
  const { container } = render(<Hello name="Dian" />);
  expect(container).toMatchSnapshot();
});
