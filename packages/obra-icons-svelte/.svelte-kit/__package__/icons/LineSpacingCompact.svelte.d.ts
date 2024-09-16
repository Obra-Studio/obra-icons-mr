import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LineSpacingCompactProps = typeof __propDef.props;
export type LineSpacingCompactEvents = typeof __propDef.events;
export type LineSpacingCompactSlots = typeof __propDef.slots;
export default class LineSpacingCompact extends SvelteComponentTyped<LineSpacingCompactProps, LineSpacingCompactEvents, LineSpacingCompactSlots> {
}
export {};
