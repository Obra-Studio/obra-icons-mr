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
export type WrenchAltProps = typeof __propDef.props;
export type WrenchAltEvents = typeof __propDef.events;
export type WrenchAltSlots = typeof __propDef.slots;
export default class WrenchAlt extends SvelteComponentTyped<WrenchAltProps, WrenchAltEvents, WrenchAltSlots> {
}
export {};
