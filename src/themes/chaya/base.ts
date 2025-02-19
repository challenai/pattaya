import palette from "./palette";

export const background = palette.black1;

export const muted = {
  background: palette.black2,
  border: palette.comment,
  shadow: "rgba(33, 37, 43, .6)",
  shadowBlur: 5,
  fontColor: "#7DA5BF",
  line: palette.line,
}

export const normal = {
  background: palette.black2,
  border: palette.comment,
  shadow: "rgba(33, 37, 43, .6)",
  shadowBlur: 12,
  fontColor: "#7DA5BF",
  line: palette.line,
}

export const active = {
  background: palette.black2,
  border: palette.purple,
  shadow: "rgba(33, 37, 43, .6)",
  shadowBlur: 12,
  fontColor: palette.yellow,
  line: palette.line2,
}

export const focus = {
  background: palette.black2,
  border: palette.yellow,
  shadow: "rgba(33, 37, 43, .6)",
  shadowBlur: 12,
  fontColor: palette.yellow,
  line: palette.line2,
}

export default { muted, normal, active, focus, background };