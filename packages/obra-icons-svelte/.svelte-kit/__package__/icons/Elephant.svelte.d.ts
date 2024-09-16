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
export type ElephantProps = typeof __propDef.props;
export type ElephantEvents = typeof __propDef.events;
export type ElephantSlots = typeof __propDef.slots;
export default class Elephant extends SvelteComponentTyped<ElephantProps, ElephantEvents, ElephantSlots> {
}
export {};
