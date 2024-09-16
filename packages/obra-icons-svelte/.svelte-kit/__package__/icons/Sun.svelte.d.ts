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
export type SunProps = typeof __propDef.props;
export type SunEvents = typeof __propDef.events;
export type SunSlots = typeof __propDef.slots;
export default class Sun extends SvelteComponentTyped<SunProps, SunEvents, SunSlots> {
}
export {};
