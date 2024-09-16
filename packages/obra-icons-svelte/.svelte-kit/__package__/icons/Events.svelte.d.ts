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
export type EventsProps = typeof __propDef.props;
export type EventsEvents = typeof __propDef.events;
export type EventsSlots = typeof __propDef.slots;
export default class Events extends SvelteComponentTyped<EventsProps, EventsEvents, EventsSlots> {
}
export {};
