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
export type CalendarRemoveFillProps = typeof __propDef.props;
export type CalendarRemoveFillEvents = typeof __propDef.events;
export type CalendarRemoveFillSlots = typeof __propDef.slots;
export default class CalendarRemoveFill extends SvelteComponentTyped<CalendarRemoveFillProps, CalendarRemoveFillEvents, CalendarRemoveFillSlots> {
}
export {};
