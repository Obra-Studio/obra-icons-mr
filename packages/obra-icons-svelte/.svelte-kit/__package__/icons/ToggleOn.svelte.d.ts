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
export type ToggleOnProps = typeof __propDef.props;
export type ToggleOnEvents = typeof __propDef.events;
export type ToggleOnSlots = typeof __propDef.slots;
export default class ToggleOn extends SvelteComponentTyped<ToggleOnProps, ToggleOnEvents, ToggleOnSlots> {
}
export {};
