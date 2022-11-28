import React, { ReactNode } from "react";
import { _FlexContainer, _FlexContainerGlass, _Props } from "./styles";

interface Props extends _Props {
  children: ReactNode
	glassEffect?: boolean
}

export const FlexContainer = ({ children, glassEffect, ...rest }: Props) => {

	if (glassEffect) return (
		<_FlexContainerGlass {...rest}>
			{children}
		</_FlexContainerGlass>
	);

	return (
		<_FlexContainer {...rest}>
			{children}
		</_FlexContainer>
	);
};