import { ReactNode } from "react";
import { DefaultTheme, ThemeProvider as _TP } from "styled-components";

interface _Props {
  children: ReactNode
}

export interface NewDefaultTheme {
  colors: {
		black: string,
		gray: {
			"900": string;
			"800": string;
		},
		cyan: {
			"500": string;
			"400": string;
		}
	},
	font: {
		primary: string;
	},
	fontSize: {
		sm: string;
		md: string;
		lg: string;
		xl: string;
		xxl: string;
	}
}

export const theme: DefaultTheme = {
	colors: {
		black: "#000",
		gray: {
			"900": "#121214",
			"800": "#202024",
		},
		cyan: {
			"500": "#61DAFB",
			"400": "#88E5FF",
		}
	},
	font: {
		primary: "Inter, sans-serif"
	},
	fontSize: {
		sm: ".875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.5rem",
		xxl: "2rem"
	}
};

export function ThemeProvider({ children }: _Props) {


	return (
		<_TP theme={theme}>
			{children}
		</_TP>
	); 
}