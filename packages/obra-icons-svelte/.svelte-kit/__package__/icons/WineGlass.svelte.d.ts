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
export type WineGlassProps = typeof __propDef.props;
export type WineGlassEvents = typeof __propDef.events;
export type WineGlassSlots = typeof __propDef.slots;
export default class WineGlass extends SvelteComponentTyped<WineGlassProps, WineGlassEvents, WineGlassSlots> {
}
export {};
