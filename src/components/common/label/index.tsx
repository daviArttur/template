import { ReactNode } from "react";
import { _Props, _Label } from "./styles";


interface Props extends _Props {
  children?: ReactNode;
  htmlFor: string;
}

export function Label({ htmlFor, children, ...styles }: Props) {


	return (
		<_Label htmlFor={htmlFor} {...styles}>
			{ children }
		</_Label>
	);
}