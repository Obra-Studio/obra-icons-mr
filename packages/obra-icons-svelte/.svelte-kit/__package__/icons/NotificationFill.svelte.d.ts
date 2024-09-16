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
export type NotificationFillProps = typeof __propDef.props;
export type NotificationFillEvents = typeof __propDef.events;
export type NotificationFillSlots = typeof __propDef.slots;
export default class NotificationFill extends SvelteComponentTyped<NotificationFillProps, NotificationFillEvents, NotificationFillSlots> {
}
export {};
