import { cleanup, render, screen } from "@testing-library/react";
import UserDetails from "./UserDetails";

// test("some test ", () => {
//   render(<UserDetails />);
//   const element = screen.getByTestId("user-details-id");
//   expect(element).toBeInTheDocument();
// });

// test("should have text content ", () => {
//   render(<UserDetails />);
//   const element = screen.getByTestId("user-details-id");
//   expect(element).toHaveTextContent("Hello from User Details");
// });

afterEach(() => {
  cleanup();
});

test("someTest", () => {
  const testData = {
    name: "ankur",
  };
  render(<UserDetails name={testData.name} />);
  const element = screen.getByTestId("user-details-id");
  expect(element).toHaveTextContent("Name:" + testData.name);
  expect(element).toContainHTML("h1");
});
