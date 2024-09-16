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
export type ChatSupportFillProps = typeof __propDef.props;
export type ChatSupportFillEvents = typeof __propDef.events;
export type ChatSupportFillSlots = typeof __propDef.slots;
export default class ChatSupportFill extends SvelteComponentTyped<ChatSupportFillProps, ChatSupportFillEvents, ChatSupportFillSlots> {
}
export {};
