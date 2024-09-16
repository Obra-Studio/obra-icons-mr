import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TerminalAltFillProps = typeof __propDef.props;
export type TerminalAltFillEvents = typeof __propDef.events;
export type TerminalAltFillSlots = typeof __propDef.slots;
export default class TerminalAltFill extends SvelteComponentTyped<TerminalAltFillProps, TerminalAltFillEvents, TerminalAltFillSlots> {
}
export {};
