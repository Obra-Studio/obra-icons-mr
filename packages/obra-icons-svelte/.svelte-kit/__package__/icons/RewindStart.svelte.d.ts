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
export type RewindStartProps = typeof __propDef.props;
export type RewindStartEvents = typeof __propDef.events;
export type RewindStartSlots = typeof __propDef.slots;
export default class RewindStart extends SvelteComponentTyped<RewindStartProps, RewindStartEvents, RewindStartSlots> {
}
export {};
