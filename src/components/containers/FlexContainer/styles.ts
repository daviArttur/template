/* eslint-disable max-len */
import styled from "styled-components";

export interface _Props {
  gap?: string;
  width?: string;
  margin?: string;
  height?: string;
  padding?: string;
  position?: string;
  flexFlow?: string;
  boxShadow?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  alignSelf?: string;
  alignItems?: string;
  justifySelf?: string;
  borderRadius?: string;
  backgroundImg?: string;
  justifyContent?: string;
  backgroundColor?: string;
}

export const _FlexContainer = styled.div<_Props>`
  gap: ${props=> props.gap ? props.gap : "0"};
  width: ${props=> props.width ? props.width : "100%"};
  margin: ${props=> props.margin ? props.margin : "0"};
  height: ${props=> props.height ? props.height : "auto"};
  display: flex;
  padding: ${props=> props.padding ? props.padding : "0"};
  max-height: ${props=> props.maxHeight ? props.maxHeight : "none"};
  max-width: ${props=> props.maxWidth ? props.maxWidth : "none"};
  min-width: ${props=> props.minWidth ? props.minWidth : "none"};
  min-height: ${props=> props.minHeight ? props.minHeight : "none"};
  position: ${props=> props.position ? props.position : "initial"};
  flex-flow: ${props=> props.flexFlow ? props.flexFlow : "row wrap"};
  box-shadow: ${props=> props.boxShadow ? props.boxShadow : "none"};
  align-self: ${props=> props.alignSelf ? props.alignSelf : "auto"};
  align-items: ${props=> props.alignItems ? props.alignItems : "center"};
  justify-self: ${props=> props.justifySelf ? props.justifySelf : "auto"};
  border-radius: ${props=> props.borderRadius ? props.borderRadius : "0"};
  justify-content: ${props=> props.justifyContent ? props.justifyContent : "center"};
  background-color: ${props=> props.backgroundColor ? props.backgroundColor : ""};
`;

export const _FlexContainerGlass = styled(_FlexContainer)`
  background: linear-gradient(123.37deg, rgba(255, 255, 255, 0.4) 12.84%, rgba(255, 255, 255, 0.1) 97.57%);
  backdrop-filter: blur(1.25rem);
`;