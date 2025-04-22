import type { BaseStyles } from "../base";

export const background = "#fff2f9";
export const backgroundColor = background;

export const muted = {
    background: "#fff",
    border: "#ccc",
    shadow: "rgba(102, 102, 102, .2)",
    shadowBlur: 5,
    line: "#ccc",
    fontColor: "#858494",
};

export const normal = {
    background: "#fff",
    border: "#999",
    shadow: "rgba(102, 102, 102, .2)",
    shadowBlur: 12,
    line: "#ccc",
    fontColor: "#858494",
};

export const active = {
    background: "#fff",
    line: "#8476FA",
    fontColor: "#8476FA",
    border: "#F5718D",
    shadow: "rgba(255, 0, 0, .3)",
    shadowBlur: 24,
};

export const focus = {
    background: "#fff",
    border: "#8476FA",
    shadow: "rgba(255, 0, 255, .3)",
    shadowBlur: 24,
    line: "#8476FA",
    fontColor: "#8476FA",
};

const base: BaseStyles = {
    muted,
    normal,
    active,
    focus,
    background,
    backgroundColor,
};

export default base;
