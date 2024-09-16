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
export type ChatAiProps = typeof __propDef.props;
export type ChatAiEvents = typeof __propDef.events;
export type ChatAiSlots = typeof __propDef.slots;
export default class ChatAi extends SvelteComponentTyped<ChatAiProps, ChatAiEvents, ChatAiSlots> {
}
export {};
