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
export type CalendarEndOfMonthFillProps = typeof __propDef.props;
export type CalendarEndOfMonthFillEvents = typeof __propDef.events;
export type CalendarEndOfMonthFillSlots = typeof __propDef.slots;
export default class CalendarEndOfMonthFill extends SvelteComponentTyped<CalendarEndOfMonthFillProps, CalendarEndOfMonthFillEvents, CalendarEndOfMonthFillSlots> {
}
export {};
