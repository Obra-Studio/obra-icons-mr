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
export type ClipboardTasksFillProps = typeof __propDef.props;
export type ClipboardTasksFillEvents = typeof __propDef.events;
export type ClipboardTasksFillSlots = typeof __propDef.slots;
export default class ClipboardTasksFill extends SvelteComponentTyped<ClipboardTasksFillProps, ClipboardTasksFillEvents, ClipboardTasksFillSlots> {
}
export {};
