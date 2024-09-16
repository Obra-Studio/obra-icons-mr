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
export type CalendarDatesFillProps = typeof __propDef.props;
export type CalendarDatesFillEvents = typeof __propDef.events;
export type CalendarDatesFillSlots = typeof __propDef.slots;
export default class CalendarDatesFill extends SvelteComponentTyped<CalendarDatesFillProps, CalendarDatesFillEvents, CalendarDatesFillSlots> {
}
export {};
