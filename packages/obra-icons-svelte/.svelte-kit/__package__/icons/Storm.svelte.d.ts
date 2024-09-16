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
export type StormProps = typeof __propDef.props;
export type StormEvents = typeof __propDef.events;
export type StormSlots = typeof __propDef.slots;
export default class Storm extends SvelteComponentTyped<StormProps, StormEvents, StormSlots> {
}
export {};
