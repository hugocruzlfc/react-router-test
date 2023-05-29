/* eslint-disable testing-library/await-async-utils */
import { fireEvent, screen, waitFor, renderWithRouter } from "../test";
import About from "./About";

describe("About", () => {
  it("should ensure the page is rendered", () => {
    renderWithRouter(<About />);

    expect(screen.getByText("About page")).toBeInTheDocument();
  });

  it("should navigate to the Contacts page", () => {
    renderWithRouter(<About />, [
      {
        path: "/contacts",
        element: <h2>Contacts page</h2>,
      },
    ]);

    fireEvent.click(screen.getByText("Contacts"));

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Contacts page"
    );
  });

  it("should navigate to the Home page (with useNavigate)", () => {
    renderWithRouter(<About />, [
      {
        path: "/",
        element: <h2>Welcome</h2>,
      },
    ]);

    fireEvent.click(screen.getByRole("button"));

    waitFor(() => {
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        "Welcome"
      );
    });
  });
});
