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
export type NotificationCheckProps = typeof __propDef.props;
export type NotificationCheckEvents = typeof __propDef.events;
export type NotificationCheckSlots = typeof __propDef.slots;
export default class NotificationCheck extends SvelteComponentTyped<NotificationCheckProps, NotificationCheckEvents, NotificationCheckSlots> {
}
export {};
