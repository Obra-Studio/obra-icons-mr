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
export type ClipboardCheckFillProps = typeof __propDef.props;
export type ClipboardCheckFillEvents = typeof __propDef.events;
export type ClipboardCheckFillSlots = typeof __propDef.slots;
export default class ClipboardCheckFill extends SvelteComponentTyped<ClipboardCheckFillProps, ClipboardCheckFillEvents, ClipboardCheckFillSlots> {
}
export {};
