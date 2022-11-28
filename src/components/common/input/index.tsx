import { ChangeEvent, ReactNode } from "react";
import { useTheme } from "styled-components";
import { _Props, _Input } from "./styles";


interface Props extends _Props {
  children?: ReactNode;
  placeholder: string;
	name: string;
	type: string;
	value: string;
	id: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Input(
	{ id, onChange, value, type, name, placeholder, children, ...styles }: Props) 
{

	return (
		<_Input
			placeholder={placeholder}
			name={name}
			type={type}
			id={id}
			value={value}
			onChange={onChange}
			{...styles}
		>
			{ children }
		</_Input>
	);
}