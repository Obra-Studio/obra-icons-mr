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
export type PigProps = typeof __propDef.props;
export type PigEvents = typeof __propDef.events;
export type PigSlots = typeof __propDef.slots;
export default class Pig extends SvelteComponentTyped<PigProps, PigEvents, PigSlots> {
}
export {};
