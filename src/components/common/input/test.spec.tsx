import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Input } from "./index";

describe("input", () => {

	it("should be in document", () => {
		render(<Input
			value="email"
			type="email"
			placeholder="email"
			onChange={() => jest.fn()}
			name="email"
			id="email" />
		);

		const inputEl = screen.getByPlaceholderText("email");

		expect(inputEl).toBeInTheDocument;
	});

	it("should has attibutes", () => {
		render(
			<Input
				value={""}
				type="email"
				placeholder="email"
				onChange={() => jest.fn()}
				name="email"
				id="email" />
		);
		const inputEl = screen.getByPlaceholderText("email");

		expect(inputEl).toHaveAttribute("value", "");
		expect(inputEl).toHaveAttribute("type", "email");
		expect(inputEl).toHaveAttribute("name", "email");
		expect(inputEl).toHaveAttribute("id", "email");
	});
});