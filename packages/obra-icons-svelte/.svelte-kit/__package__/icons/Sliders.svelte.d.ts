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
export type SlidersProps = typeof __propDef.props;
export type SlidersEvents = typeof __propDef.events;
export type SlidersSlots = typeof __propDef.slots;
export default class Sliders extends SvelteComponentTyped<SlidersProps, SlidersEvents, SlidersSlots> {
}
export {};
