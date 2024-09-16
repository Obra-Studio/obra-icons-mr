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
export type DivideAltProps = typeof __propDef.props;
export type DivideAltEvents = typeof __propDef.events;
export type DivideAltSlots = typeof __propDef.slots;
export default class DivideAlt extends SvelteComponentTyped<DivideAltProps, DivideAltEvents, DivideAltSlots> {
}
export {};
