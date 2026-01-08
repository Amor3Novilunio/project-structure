import type themeConst from "../constants/theme.const";

export type ThemeTypes = keyof typeof themeConst;
export type ColorTypes = (typeof themeConst)[ThemeTypes];