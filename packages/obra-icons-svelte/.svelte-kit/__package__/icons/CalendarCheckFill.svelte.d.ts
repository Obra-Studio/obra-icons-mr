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
export type CalendarCheckFillProps = typeof __propDef.props;
export type CalendarCheckFillEvents = typeof __propDef.events;
export type CalendarCheckFillSlots = typeof __propDef.slots;
export default class CalendarCheckFill extends SvelteComponentTyped<CalendarCheckFillProps, CalendarCheckFillEvents, CalendarCheckFillSlots> {
}
export {};
