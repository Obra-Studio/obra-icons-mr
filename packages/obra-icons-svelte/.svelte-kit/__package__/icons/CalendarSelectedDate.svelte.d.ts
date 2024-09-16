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
export type CalendarSelectedDateProps = typeof __propDef.props;
export type CalendarSelectedDateEvents = typeof __propDef.events;
export type CalendarSelectedDateSlots = typeof __propDef.slots;
export default class CalendarSelectedDate extends SvelteComponentTyped<CalendarSelectedDateProps, CalendarSelectedDateEvents, CalendarSelectedDateSlots> {
}
export {};
