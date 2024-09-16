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
export type ClipboardAddProps = typeof __propDef.props;
export type ClipboardAddEvents = typeof __propDef.events;
export type ClipboardAddSlots = typeof __propDef.slots;
export default class ClipboardAdd extends SvelteComponentTyped<ClipboardAddProps, ClipboardAddEvents, ClipboardAddSlots> {
}
export {};
