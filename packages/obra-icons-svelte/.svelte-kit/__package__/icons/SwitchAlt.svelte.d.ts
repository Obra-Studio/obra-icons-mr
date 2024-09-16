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
export type SwitchAltProps = typeof __propDef.props;
export type SwitchAltEvents = typeof __propDef.events;
export type SwitchAltSlots = typeof __propDef.slots;
export default class SwitchAlt extends SvelteComponentTyped<SwitchAltProps, SwitchAltEvents, SwitchAltSlots> {
}
export {};
