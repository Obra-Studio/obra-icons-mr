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
export type LineSpacingSpaciousProps = typeof __propDef.props;
export type LineSpacingSpaciousEvents = typeof __propDef.events;
export type LineSpacingSpaciousSlots = typeof __propDef.slots;
export default class LineSpacingSpacious extends SvelteComponentTyped<LineSpacingSpaciousProps, LineSpacingSpaciousEvents, LineSpacingSpaciousSlots> {
}
export {};
