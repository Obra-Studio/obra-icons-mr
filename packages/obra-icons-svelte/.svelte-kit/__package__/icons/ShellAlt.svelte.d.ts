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
export type ShellAltProps = typeof __propDef.props;
export type ShellAltEvents = typeof __propDef.events;
export type ShellAltSlots = typeof __propDef.slots;
export default class ShellAlt extends SvelteComponentTyped<ShellAltProps, ShellAltEvents, ShellAltSlots> {
}
export {};
