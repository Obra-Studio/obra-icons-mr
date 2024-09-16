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
export type WineProps = typeof __propDef.props;
export type WineEvents = typeof __propDef.events;
export type WineSlots = typeof __propDef.slots;
export default class Wine extends SvelteComponentTyped<WineProps, WineEvents, WineSlots> {
}
export {};
