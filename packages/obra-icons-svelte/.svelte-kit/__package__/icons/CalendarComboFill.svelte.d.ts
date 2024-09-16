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
export type CalendarComboFillProps = typeof __propDef.props;
export type CalendarComboFillEvents = typeof __propDef.events;
export type CalendarComboFillSlots = typeof __propDef.slots;
export default class CalendarComboFill extends SvelteComponentTyped<CalendarComboFillProps, CalendarComboFillEvents, CalendarComboFillSlots> {
}
export {};
