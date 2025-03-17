import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { scale } from "@pattaya/pattaya/components";

const ident = "ptyScaleMultiple";

const textOpts = {
    textAlign: "center",
    textBaseline: "middle",
    font: "14px Arial",
};

const frags1 = scale.multiple.fragments({ segements: [{ width: 130, space: 58 }, { width: 180, space: 58 }], height: 16, padding: 5, arrowSize: 7, vertical: false }, theme.ptr.scale.normal);
const n1 = {
    x: 160,
    y: 130,
    texts: [
        {
            x: 130 / 2,
            content: "Header",
            opts: {
                ...textOpts,
                width: 58,
                fill: theme.ptr.line.normal.color
            },
        },
        {
            x: 130 + 180 / 2,
            content: "Content",
            opts: {
                ...textOpts,
                width: 58,
                fill: theme.ptr.line.normal.color
            },
        }
    ],
    children: frags1.elements,
};

const frags2 = scale.multiple.fragments({ segements: [{ width: 130, space: 36 }, { width: 90, space: 36 }], height: 16, padding: 5, arrowSize: 7, vertical: true }, theme.ptr.scale.active);
const n2 = {
    x: 580,
    y: 60,
    texts: [
        {
            y: 130 / 2,
            content: "54cm",
            opts: {
                ...textOpts,
                width: 42,
                fill: "#8ac"
            }
        },
        {
            y: 130 + 90 / 2,
            content: "32cm",
            opts: {
                ...textOpts,
                width: 42,
                fill: "#8ac"
            }
        }
    ],
    children: frags2.elements,
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n1, n2]]));

function applyTheme() {
    scale.multiple.applyStyles(frags1, theme.ptr.scale.normal);
    scale.multiple.applyStyles(frags2, theme.ptr.scale.active);
    graph.renderAll();
}

const layers = [n1, n2];

export default {
    ident,
    graph,
    applyTheme,
    layers,
}