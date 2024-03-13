import { render, screen } from "@testing-library/react";

import App from "./App.tsx";

describe("User", () => {
  test("renders heading", async () => {
    render(<App />);
    const elem = screen.getByText("Welcome TO React TypeScript")
    expect(elem).toContain("Welcome To React TypeScript");
  });

}); 


