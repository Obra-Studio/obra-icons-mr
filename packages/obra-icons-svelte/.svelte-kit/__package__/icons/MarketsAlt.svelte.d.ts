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
export type MarketsAltProps = typeof __propDef.props;
export type MarketsAltEvents = typeof __propDef.events;
export type MarketsAltSlots = typeof __propDef.slots;
export default class MarketsAlt extends SvelteComponentTyped<MarketsAltProps, MarketsAltEvents, MarketsAltSlots> {
}
export {};
