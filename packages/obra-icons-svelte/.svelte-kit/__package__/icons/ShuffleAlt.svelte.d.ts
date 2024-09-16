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
export type ShuffleAltProps = typeof __propDef.props;
export type ShuffleAltEvents = typeof __propDef.events;
export type ShuffleAltSlots = typeof __propDef.slots;
export default class ShuffleAlt extends SvelteComponentTyped<ShuffleAltProps, ShuffleAltEvents, ShuffleAltSlots> {
}
export {};
