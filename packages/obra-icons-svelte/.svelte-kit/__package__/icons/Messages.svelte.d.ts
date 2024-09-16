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
export type MessagesProps = typeof __propDef.props;
export type MessagesEvents = typeof __propDef.events;
export type MessagesSlots = typeof __propDef.slots;
export default class Messages extends SvelteComponentTyped<MessagesProps, MessagesEvents, MessagesSlots> {
}
export {};
