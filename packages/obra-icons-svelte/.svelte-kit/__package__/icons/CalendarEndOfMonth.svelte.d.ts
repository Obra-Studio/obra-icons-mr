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
export type CalendarEndOfMonthProps = typeof __propDef.props;
export type CalendarEndOfMonthEvents = typeof __propDef.events;
export type CalendarEndOfMonthSlots = typeof __propDef.slots;
export default class CalendarEndOfMonth extends SvelteComponentTyped<CalendarEndOfMonthProps, CalendarEndOfMonthEvents, CalendarEndOfMonthSlots> {
}
export {};
