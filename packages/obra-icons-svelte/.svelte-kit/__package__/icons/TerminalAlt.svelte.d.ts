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
export type TerminalAltProps = typeof __propDef.props;
export type TerminalAltEvents = typeof __propDef.events;
export type TerminalAltSlots = typeof __propDef.slots;
export default class TerminalAlt extends SvelteComponentTyped<TerminalAltProps, TerminalAltEvents, TerminalAltSlots> {
}
export {};
