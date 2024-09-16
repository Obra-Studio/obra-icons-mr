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
export type MessageFillProps = typeof __propDef.props;
export type MessageFillEvents = typeof __propDef.events;
export type MessageFillSlots = typeof __propDef.slots;
export default class MessageFill extends SvelteComponentTyped<MessageFillProps, MessageFillEvents, MessageFillSlots> {
}
export {};
