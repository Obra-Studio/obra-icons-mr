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
export type CalendarDatesProps = typeof __propDef.props;
export type CalendarDatesEvents = typeof __propDef.events;
export type CalendarDatesSlots = typeof __propDef.slots;
export default class CalendarDates extends SvelteComponentTyped<CalendarDatesProps, CalendarDatesEvents, CalendarDatesSlots> {
}
export {};
