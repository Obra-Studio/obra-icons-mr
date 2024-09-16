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
export type ClipboardErrorFillProps = typeof __propDef.props;
export type ClipboardErrorFillEvents = typeof __propDef.events;
export type ClipboardErrorFillSlots = typeof __propDef.slots;
export default class ClipboardErrorFill extends SvelteComponentTyped<ClipboardErrorFillProps, ClipboardErrorFillEvents, ClipboardErrorFillSlots> {
}
export {};
