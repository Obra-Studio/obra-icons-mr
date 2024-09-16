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
export type KeyAltProps = typeof __propDef.props;
export type KeyAltEvents = typeof __propDef.events;
export type KeyAltSlots = typeof __propDef.slots;
export default class KeyAlt extends SvelteComponentTyped<KeyAltProps, KeyAltEvents, KeyAltSlots> {
}
export {};
