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
export type MessageSquareProps = typeof __propDef.props;
export type MessageSquareEvents = typeof __propDef.events;
export type MessageSquareSlots = typeof __propDef.slots;
export default class MessageSquare extends SvelteComponentTyped<MessageSquareProps, MessageSquareEvents, MessageSquareSlots> {
}
export {};
