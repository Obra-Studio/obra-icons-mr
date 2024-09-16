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
export type MegaphoneAltProps = typeof __propDef.props;
export type MegaphoneAltEvents = typeof __propDef.events;
export type MegaphoneAltSlots = typeof __propDef.slots;
export default class MegaphoneAlt extends SvelteComponentTyped<MegaphoneAltProps, MegaphoneAltEvents, MegaphoneAltSlots> {
}
export {};
