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
export type BrushProps = typeof __propDef.props;
export type BrushEvents = typeof __propDef.events;
export type BrushSlots = typeof __propDef.slots;
export default class Brush extends SvelteComponentTyped<BrushProps, BrushEvents, BrushSlots> {
}
export {};
