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
export type ToggleOffProps = typeof __propDef.props;
export type ToggleOffEvents = typeof __propDef.events;
export type ToggleOffSlots = typeof __propDef.slots;
export default class ToggleOff extends SvelteComponentTyped<ToggleOffProps, ToggleOffEvents, ToggleOffSlots> {
}
export {};
