import React, { FormEvent, FormEventHandler, ReactNode } from "react";
import { _Form, _Props } from "./styles";

interface Props extends _Props {
  children?: ReactNode;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void | FormEventHandler<HTMLFormElement>;
}

export function Form ({ children, onSubmit, ...styles }: Props) {

	return (
		<_Form onSubmit={onSubmit} role="form" {...styles}>
			{ children }
		</_Form>
	);
}