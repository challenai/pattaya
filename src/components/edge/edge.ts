import type { Fragment } from "../../core";

export interface EdgeFragments {
    line: Fragment;
    start?: Fragment;
    end?: Fragment;
    elements: Fragment[];
}
