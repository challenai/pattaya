import palette from "./palette";

export const background = palette.flat;

export const muted = {
  line: palette.baby,
  border: palette.grotto,
  background: palette.flat,
  fontColor: palette.royal,
}

export const normal = {
  line: palette.baby,
  border: palette.grotto,
  background: palette.flat,
  fontColor: palette.royal,
}

export const active = {
  line: palette.navy,
  border: palette.navy,
  background: palette.comp1,
  fontColor: palette.navy,
}

export const focus = {
  line: palette.navy,
  border: palette.navy,
  background: palette.comp2,
  fontColor: palette.navy,
}

export default { muted, normal, active, focus, background };