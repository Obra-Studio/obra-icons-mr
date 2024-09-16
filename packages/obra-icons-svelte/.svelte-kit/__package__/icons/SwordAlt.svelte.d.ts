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
export type SwordAltProps = typeof __propDef.props;
export type SwordAltEvents = typeof __propDef.events;
export type SwordAltSlots = typeof __propDef.slots;
export default class SwordAlt extends SvelteComponentTyped<SwordAltProps, SwordAltEvents, SwordAltSlots> {
}
export {};
