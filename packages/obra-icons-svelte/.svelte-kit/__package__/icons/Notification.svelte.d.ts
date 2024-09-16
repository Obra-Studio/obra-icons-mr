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
export type NotificationProps = typeof __propDef.props;
export type NotificationEvents = typeof __propDef.events;
export type NotificationSlots = typeof __propDef.slots;
export default class Notification extends SvelteComponentTyped<NotificationProps, NotificationEvents, NotificationSlots> {
}
export {};
