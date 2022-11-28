import styled from "styled-components";

export interface _Props {
  width?: string;
  margin?: string;
  border?: string;
  height?: string;
  padding?: string;
  outline?: string;
  fontSize?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  borderRadius?: string;
  backgroundColor?: string;
}

export const _Input = styled.input<_Props>`
  width:  ${p => p.width ? p.width : "auto"};
  border:  ${p => p.border ? p.border : "0"};
  height: ${p => p.height ? p.height : "3rem"};
  margin: ${p => p.margin ? p.margin : ".75rem 0 1.25rem 0"};
  outline: ${p => p.outline ? p.outline : "none"};
  padding: ${p => p.padding ? p.padding : ".5rem 1rem"};
  font-size: ${p => p.fontSize ? p.fontSize : "1.125rem"};
  max-width: ${p => p.maxWidth ? p.maxWidth : "25rem"};
  min-width: ${p => p.minWidth ? p.minWidth : "none"};
  min-height: ${p => p.minHeight ? p.minHeight : "none"};
  max-height: ${p => p.maxHeight ? p.maxHeight : "none"};
  border-radius: ${props=> props.borderRadius ? props.borderRadius : ".25rem"};
  background-color: ${p => p.backgroundColor ? p.backgroundColor : "black"};
`;