import { render, screen } from "@testing-library/react";
import App from "./App";
import UserDetails from "./UserDetails";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("sample test ", () => {
//   expect("a").toBe("a");
// });

test("some test ", () => {
  render(<UserDetails />);
  const element = screen.getByTestId("user-details-id");
  expect(element).toBeInTheDocument();
});
