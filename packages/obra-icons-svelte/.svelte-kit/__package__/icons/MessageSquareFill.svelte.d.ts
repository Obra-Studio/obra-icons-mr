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
export type MessageSquareFillProps = typeof __propDef.props;
export type MessageSquareFillEvents = typeof __propDef.events;
export type MessageSquareFillSlots = typeof __propDef.slots;
export default class MessageSquareFill extends SvelteComponentTyped<MessageSquareFillProps, MessageSquareFillEvents, MessageSquareFillSlots> {
}
export {};
