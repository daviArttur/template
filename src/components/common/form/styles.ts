import styled from "styled-components";

export interface _Props {
  gap?: string;
  width?: string
  border?: string;
  height?: string;
  flexFlow?: string;
  maxWidth?: string;
  boxShadow?: string;
  maxHeight?: string;
  minHeight?: string;
  minWidth?: string;
  backgroundColor ?: string;
}

export const _Form = styled.form<_Props>`
  gap: ${p => p.gap ? p.gap : "initial"};
  width:  ${p => p.width ? p.width : "auto"};
  border: ${p => p.border ? p.border : "none"};
  height: ${p => p.height ? p.height : "auto"};
  display: "flex";
  flex-flow: ${p => p.flexFlow ? p.flexFlow : "initial"};
  max-width: ${p => p.maxWidth ? p.maxWidth : "none"};
  min-width: ${p => p.minWidth ? p.minWidth : "none"};
  min-height: ${p => p.minHeight ? p.minHeight : "none"};
  box-shadow: ${p => p.boxShadow ? p.boxShadow : "none"};
  max-height: ${p => p.maxHeight ? p.maxHeight : "none"};
  background-color:  ${p => p.backgroundColor ? p.backgroundColor : "initial"};
`;