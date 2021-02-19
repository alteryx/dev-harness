import * as MPalette from '@material-ui/core/styles/createPalette';

export interface BlueGrey {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface Brand {
  blueRazz: string;
  corporateBlue: string;
  cottonCandy: string;
  deepSpace: string;
  grapeSoda: string;
  greenApple: string;
  hotSauce: string;
  wasabi: string;
}

export interface Success {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export interface Warning {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export interface ToolCategory {
  address: string;
  behavioralAnalysis: string;
  calgary: string;
  connectors: string;
  dataInvestigation: string;
  demographicAnalysis: string;
  developer: string;
  documentation: string;
  favorites: string;
  inDatabase: string;
  inOut: string;
  interface: string;
  join: string;
  parse: string;
  predictive: string;
  preparation: string;
  reporting: string;
  spatial: string;
  transform: string;
}

interface IExtendedTypeAction extends MPalette.TypeAction {
  passive: string;
}
interface ExtendedPalette extends MPalette.Palette {
  blueGrey: BlueGrey;
  brand: Brand;
  success: Success;
  warning: Warning;
  toolCategory: ToolCategory;
  action: IExtendedTypeAction;
}

export type Palette = ExtendedPalette;
export type ColorPartial = MPalette.ColorPartial;
export type TypeText = MPalette.TypeText;
export type TypeAction = IExtendedTypeAction;
export type TypeBackground = MPalette.TypeBackground;
export type TypeDivider = MPalette.TypeDivider;
export type PaletteColorOptions = MPalette.PaletteColorOptions;
export type SimplePaletteColorOptions = MPalette.SimplePaletteColorOptions;
export type PaletteColor = MPalette.PaletteColor;
export type TypeObject = MPalette.TypeObject;
export const light: TypeObject;
export const dark: TypeObject;
export type PartialTypeObject = MPalette.PartialTypeObject;
export type PaletteOptions = MPalette.PaletteOptions;
export default MPalette.default;
