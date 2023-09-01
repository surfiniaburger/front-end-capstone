import { render, screen } from "@testing-library/react";

import BookingPage from "./components/BookingPage";

test('Renders the BookingPage heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Make a Reservation");
    expect(headingElement).toBeInTheDocument();
})


