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
export type ClipboardErrorProps = typeof __propDef.props;
export type ClipboardErrorEvents = typeof __propDef.events;
export type ClipboardErrorSlots = typeof __propDef.slots;
export default class ClipboardError extends SvelteComponentTyped<ClipboardErrorProps, ClipboardErrorEvents, ClipboardErrorSlots> {
}
export {};
