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
export type CalendarWaitProps = typeof __propDef.props;
export type CalendarWaitEvents = typeof __propDef.events;
export type CalendarWaitSlots = typeof __propDef.slots;
export default class CalendarWait extends SvelteComponentTyped<CalendarWaitProps, CalendarWaitEvents, CalendarWaitSlots> {
}
export {};
