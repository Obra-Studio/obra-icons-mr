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
export type RepeatAltProps = typeof __propDef.props;
export type RepeatAltEvents = typeof __propDef.events;
export type RepeatAltSlots = typeof __propDef.slots;
export default class RepeatAlt extends SvelteComponentTyped<RepeatAltProps, RepeatAltEvents, RepeatAltSlots> {
}
export {};
