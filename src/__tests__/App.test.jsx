import { render, screen } from "@testing-library/react";
import App from "../App";
/* eslint-env jest */

test("renders welcome message", () => {
  render(<App />);
  expect(screen.getByText(/vite/i)).toBeInTheDocument();
});
