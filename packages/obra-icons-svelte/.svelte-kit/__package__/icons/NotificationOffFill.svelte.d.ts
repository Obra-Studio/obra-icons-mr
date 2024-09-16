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
export type NotificationOffFillProps = typeof __propDef.props;
export type NotificationOffFillEvents = typeof __propDef.events;
export type NotificationOffFillSlots = typeof __propDef.slots;
export default class NotificationOffFill extends SvelteComponentTyped<NotificationOffFillProps, NotificationOffFillEvents, NotificationOffFillSlots> {
}
export {};
