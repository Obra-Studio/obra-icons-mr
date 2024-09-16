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
export type MessageCircleFillProps = typeof __propDef.props;
export type MessageCircleFillEvents = typeof __propDef.events;
export type MessageCircleFillSlots = typeof __propDef.slots;
export default class MessageCircleFill extends SvelteComponentTyped<MessageCircleFillProps, MessageCircleFillEvents, MessageCircleFillSlots> {
}
export {};
