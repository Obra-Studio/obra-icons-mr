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
export type InboxAltProps = typeof __propDef.props;
export type InboxAltEvents = typeof __propDef.events;
export type InboxAltSlots = typeof __propDef.slots;
export default class InboxAlt extends SvelteComponentTyped<InboxAltProps, InboxAltEvents, InboxAltSlots> {
}
export {};
