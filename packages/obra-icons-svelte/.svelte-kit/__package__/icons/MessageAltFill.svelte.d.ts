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
export type MessageAltFillProps = typeof __propDef.props;
export type MessageAltFillEvents = typeof __propDef.events;
export type MessageAltFillSlots = typeof __propDef.slots;
export default class MessageAltFill extends SvelteComponentTyped<MessageAltFillProps, MessageAltFillEvents, MessageAltFillSlots> {
}
export {};
