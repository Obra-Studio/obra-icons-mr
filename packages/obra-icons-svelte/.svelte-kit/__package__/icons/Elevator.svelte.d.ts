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
export type ElevatorProps = typeof __propDef.props;
export type ElevatorEvents = typeof __propDef.events;
export type ElevatorSlots = typeof __propDef.slots;
export default class Elevator extends SvelteComponentTyped<ElevatorProps, ElevatorEvents, ElevatorSlots> {
}
export {};
