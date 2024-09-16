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
export type StrokeWidthProps = typeof __propDef.props;
export type StrokeWidthEvents = typeof __propDef.events;
export type StrokeWidthSlots = typeof __propDef.slots;
export default class StrokeWidth extends SvelteComponentTyped<StrokeWidthProps, StrokeWidthEvents, StrokeWidthSlots> {
}
export {};
