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
export type ClipboardCheckProps = typeof __propDef.props;
export type ClipboardCheckEvents = typeof __propDef.events;
export type ClipboardCheckSlots = typeof __propDef.slots;
export default class ClipboardCheck extends SvelteComponentTyped<ClipboardCheckProps, ClipboardCheckEvents, ClipboardCheckSlots> {
}
export {};
