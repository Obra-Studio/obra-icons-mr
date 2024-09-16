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
export type TimerProps = typeof __propDef.props;
export type TimerEvents = typeof __propDef.events;
export type TimerSlots = typeof __propDef.slots;
export default class Timer extends SvelteComponentTyped<TimerProps, TimerEvents, TimerSlots> {
}
export {};
