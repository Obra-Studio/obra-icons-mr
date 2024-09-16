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
export type ClipboardEmptyProps = typeof __propDef.props;
export type ClipboardEmptyEvents = typeof __propDef.events;
export type ClipboardEmptySlots = typeof __propDef.slots;
export default class ClipboardEmpty extends SvelteComponentTyped<ClipboardEmptyProps, ClipboardEmptyEvents, ClipboardEmptySlots> {
}
export {};
