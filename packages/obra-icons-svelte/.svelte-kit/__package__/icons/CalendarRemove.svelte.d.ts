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
export type CalendarRemoveProps = typeof __propDef.props;
export type CalendarRemoveEvents = typeof __propDef.events;
export type CalendarRemoveSlots = typeof __propDef.slots;
export default class CalendarRemove extends SvelteComponentTyped<CalendarRemoveProps, CalendarRemoveEvents, CalendarRemoveSlots> {
}
export {};
