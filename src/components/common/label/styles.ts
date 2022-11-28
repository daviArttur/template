import { ppid } from "process";
import styled from "styled-components";

export interface _Props {
  width?: string;
  height?: string;
  display?: string;
  flexFlow?: string;
  minWidth?: string;
  fontSize?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  backgroundColor?: string;
}

export const _Label = styled.label<_Props>`
  width:  ${p => p.width ? p.width : "auto"};
  height: ${p => p.height ? p.height : "auto"};
  display: ${p => p.display ? p.display : "flex"};
  max-width: ${p => p.maxWidth ? p.maxWidth : "none"};
  font-size: ${p => p.fontSize ? p.fontSize : "1rem"};
  font-weight: 600;
  min-width: ${p => p.minWidth ? p.minWidth : "none"};
  min-height: ${p => p.minHeight ? p.minHeight : "none"};
  max-height: ${p => p.maxHeight ? p.maxHeight : "none"};
  flex-flow:  ${p => p.flexFlow ? p.flexFlow : "column nowrap"};
  background-color: ${p => p.backgroundColor ? p.backgroundColor : "initial"};
`;


