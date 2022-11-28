import { NewDefaultTheme } from "./src/config/styles"

declare module 'styled-components' {
  export interface DefaultTheme extends NewDefaultTheme {}
}