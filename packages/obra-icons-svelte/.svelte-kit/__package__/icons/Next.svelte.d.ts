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
export type NextProps = typeof __propDef.props;
export type NextEvents = typeof __propDef.events;
export type NextSlots = typeof __propDef.slots;
export default class Next extends SvelteComponentTyped<NextProps, NextEvents, NextSlots> {
}
export {};
