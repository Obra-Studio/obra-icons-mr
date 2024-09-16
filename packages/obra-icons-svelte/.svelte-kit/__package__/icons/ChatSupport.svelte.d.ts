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
export type ChatSupportProps = typeof __propDef.props;
export type ChatSupportEvents = typeof __propDef.events;
export type ChatSupportSlots = typeof __propDef.slots;
export default class ChatSupport extends SvelteComponentTyped<ChatSupportProps, ChatSupportEvents, ChatSupportSlots> {
}
export {};
