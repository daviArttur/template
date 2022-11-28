import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Label } from "./index";

describe("test label component", () => {

	it("should be rendered", () => {
		render(<Label htmlFor="Email">Email</Label>); 

		const labelEl = screen.getByText("Email");

		expect(labelEl).toBeInTheDocument();
	});

	it("shoud has a 'for' attribute", () => {
		render(<Label htmlFor="Email">Email</Label>); 

		const labelEl = screen.getByText("Email");

		expect(labelEl).toHaveAttribute("for");
	});

	it("should render an input", () => {
		render(
			<Label htmlFor="email">Email
				<input id="email" placeholder="asdasd" name="email" type="email" />
			</Label>
		); 
		const inputEl = screen.getByPlaceholderText("asdasd");

		expect(inputEl).toBeInTheDocument();
	});
});