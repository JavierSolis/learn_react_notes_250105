import "styled-components";
import "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    background: string;
    tint: string;
    icon: string;
    tabIconDefault: string;
    tabIconSelected: string;
  }
}

declare module "styled-components/native" {
  export interface DefaultTheme {
    text: string;
    background: string;
    tint: string;
    icon: string;
    tabIconDefault: string;
    tabIconSelected: string;
  }
}
