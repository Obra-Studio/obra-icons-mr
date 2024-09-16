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
export type CalendarCheckProps = typeof __propDef.props;
export type CalendarCheckEvents = typeof __propDef.events;
export type CalendarCheckSlots = typeof __propDef.slots;
export default class CalendarCheck extends SvelteComponentTyped<CalendarCheckProps, CalendarCheckEvents, CalendarCheckSlots> {
}
export {};
