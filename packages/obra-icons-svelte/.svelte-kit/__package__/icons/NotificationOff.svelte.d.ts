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
export type NotificationOffProps = typeof __propDef.props;
export type NotificationOffEvents = typeof __propDef.events;
export type NotificationOffSlots = typeof __propDef.slots;
export default class NotificationOff extends SvelteComponentTyped<NotificationOffProps, NotificationOffEvents, NotificationOffSlots> {
}
export {};
