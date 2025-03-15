import { deriveTheme } from "../derive";
import base from "./base";
import palette from "./palette";

const theme = deriveTheme(base);

export default {
  palette,
  base,
  theme
};