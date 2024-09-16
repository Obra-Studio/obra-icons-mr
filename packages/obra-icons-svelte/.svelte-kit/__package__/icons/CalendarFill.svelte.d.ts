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
export type CalendarFillProps = typeof __propDef.props;
export type CalendarFillEvents = typeof __propDef.events;
export type CalendarFillSlots = typeof __propDef.slots;
export default class CalendarFill extends SvelteComponentTyped<CalendarFillProps, CalendarFillEvents, CalendarFillSlots> {
}
export {};
