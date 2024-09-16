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
export type FlowerAltProps = typeof __propDef.props;
export type FlowerAltEvents = typeof __propDef.events;
export type FlowerAltSlots = typeof __propDef.slots;
export default class FlowerAlt extends SvelteComponentTyped<FlowerAltProps, FlowerAltEvents, FlowerAltSlots> {
}
export {};
