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
export type ClipboardAddFillProps = typeof __propDef.props;
export type ClipboardAddFillEvents = typeof __propDef.events;
export type ClipboardAddFillSlots = typeof __propDef.slots;
export default class ClipboardAddFill extends SvelteComponentTyped<ClipboardAddFillProps, ClipboardAddFillEvents, ClipboardAddFillSlots> {
}
export {};
