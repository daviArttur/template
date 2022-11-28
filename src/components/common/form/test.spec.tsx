import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./index";
import "@testing-library/jest-dom";

describe("Home", () => {
	it("should render a form", () => {
		render(<Form/>);

		const heading = screen.getByRole("form");

		expect(heading).toBeInTheDocument();
	});

	it("should activate onSubmitEvent", async () => {
		const mockOnSubmit = jest.fn();
		render(<Form onSubmit={mockOnSubmit}/>);

		const heading = screen.getByRole("form");
		fireEvent.submit(heading);

		expect(mockOnSubmit).toHaveBeenCalled();
	});

	it.only("should be possible render the children elements", () => {
		render(<Form><label>mocked label</label></Form>);
		
		const labelInForm = screen.getByText("mocked label");

		expect(labelInForm).toBeInTheDocument();
	});
});