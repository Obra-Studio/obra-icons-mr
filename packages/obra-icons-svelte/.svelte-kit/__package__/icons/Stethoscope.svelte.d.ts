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
export type StethoscopeProps = typeof __propDef.props;
export type StethoscopeEvents = typeof __propDef.events;
export type StethoscopeSlots = typeof __propDef.slots;
export default class Stethoscope extends SvelteComponentTyped<StethoscopeProps, StethoscopeEvents, StethoscopeSlots> {
}
export {};
