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
export type RewindProps = typeof __propDef.props;
export type RewindEvents = typeof __propDef.events;
export type RewindSlots = typeof __propDef.slots;
export default class Rewind extends SvelteComponentTyped<RewindProps, RewindEvents, RewindSlots> {
}
export {};
