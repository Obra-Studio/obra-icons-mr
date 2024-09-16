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
export type RepeatProps = typeof __propDef.props;
export type RepeatEvents = typeof __propDef.events;
export type RepeatSlots = typeof __propDef.slots;
export default class Repeat extends SvelteComponentTyped<RepeatProps, RepeatEvents, RepeatSlots> {
}
export {};
