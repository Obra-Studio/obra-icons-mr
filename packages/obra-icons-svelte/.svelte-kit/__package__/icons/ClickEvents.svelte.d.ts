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
export type ClickEventsProps = typeof __propDef.props;
export type ClickEventsEvents = typeof __propDef.events;
export type ClickEventsSlots = typeof __propDef.slots;
export default class ClickEvents extends SvelteComponentTyped<ClickEventsProps, ClickEventsEvents, ClickEventsSlots> {
}
export {};
