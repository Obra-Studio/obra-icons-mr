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
export type CalendarSelectedDateFillProps = typeof __propDef.props;
export type CalendarSelectedDateFillEvents = typeof __propDef.events;
export type CalendarSelectedDateFillSlots = typeof __propDef.slots;
export default class CalendarSelectedDateFill extends SvelteComponentTyped<CalendarSelectedDateFillProps, CalendarSelectedDateFillEvents, CalendarSelectedDateFillSlots> {
}
export {};
