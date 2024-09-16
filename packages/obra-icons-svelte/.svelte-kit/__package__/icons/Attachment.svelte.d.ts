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
export type AttachmentProps = typeof __propDef.props;
export type AttachmentEvents = typeof __propDef.events;
export type AttachmentSlots = typeof __propDef.slots;
export default class Attachment extends SvelteComponentTyped<AttachmentProps, AttachmentEvents, AttachmentSlots> {
}
export {};
