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
export type ChatAiFillProps = typeof __propDef.props;
export type ChatAiFillEvents = typeof __propDef.events;
export type ChatAiFillSlots = typeof __propDef.slots;
export default class ChatAiFill extends SvelteComponentTyped<ChatAiFillProps, ChatAiFillEvents, ChatAiFillSlots> {
}
export {};
