import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./index";
import "@testing-library/jest-dom";
import * as mock from "styled-components";
import { theme } from "../../config/styles";
import { postCredentials } from "../api/user/auth/postAuth";


jest.mock("next/router", () => ({
	useRouter: jest.fn()
}));

describe("Home", () => {

	let form: HTMLFormElement;
	const mockApi = { postCredentials };
	beforeEach(() => {
		jest.spyOn(mock, "useTheme").mockReturnValue(theme);
		render(<Login />);
		form = screen.getByRole("form");
	});

	it("should render Login", () => {
		expect(form).toBeInTheDocument();
	});

	it("should render inputs, labels and button", () => {
		const labelEmailEl = screen.getByText("Email");
		const labelPasswordEl = screen.getByText("Password");
		const inputEmailEl = screen.getByPlaceholderText("email");
		const inputPasswordEl = screen.getByPlaceholderText("password");
		const buttonEl = screen.getByRole("button");

		expect(buttonEl).toBeInTheDocument();
		expect(labelEmailEl).toBeInTheDocument();
		expect(labelPasswordEl).toBeInTheDocument();
		expect(inputEmailEl).toBeInTheDocument();
		expect(inputPasswordEl).toBeInTheDocument();
	});

	it("should be possible write in input fields", () => {
		const inputEmailEl = screen.getByPlaceholderText("email") as HTMLInputElement;
		const inputPasswordEl = screen.getByPlaceholderText("password") as HTMLInputElement;

		fireEvent.change(inputEmailEl, { target: { value: "johndoe@gmail.com" } });
		fireEvent.change(inputPasswordEl, { target: { value: "password123" } });

		expect(inputEmailEl).toHaveValue("johndoe@gmail.com");
		expect(inputPasswordEl).toHaveValue("password123");
	});

	it.skip("should be possible submit form", () => {
		jest.spyOn(mockApi, "postCredentials").mockImplementation(() => true);
		const inputEmailEl = screen.getByPlaceholderText("email");
		const inputPasswordEl = screen.getByPlaceholderText("password");


		fireEvent.change(inputEmailEl, { target: { value: "johndoe@gmail.com" } });
		fireEvent.change(inputPasswordEl, { target: { value: "password123" } });
		jest.spyOn(mockApi, "postCredentials").mockReturnValue(true);
		jest.spyOn(mockApi, "postCredentials").mockReturnValue(true);
		const buttonEl = screen.getByRole("button");
		fireEvent.click(buttonEl);
	});
});