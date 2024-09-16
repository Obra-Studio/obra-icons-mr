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
export type ClipboardEmptyFillProps = typeof __propDef.props;
export type ClipboardEmptyFillEvents = typeof __propDef.events;
export type ClipboardEmptyFillSlots = typeof __propDef.slots;
export default class ClipboardEmptyFill extends SvelteComponentTyped<ClipboardEmptyFillProps, ClipboardEmptyFillEvents, ClipboardEmptyFillSlots> {
}
export {};
