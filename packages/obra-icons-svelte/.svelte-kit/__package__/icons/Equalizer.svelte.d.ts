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
export type EqualizerProps = typeof __propDef.props;
export type EqualizerEvents = typeof __propDef.events;
export type EqualizerSlots = typeof __propDef.slots;
export default class Equalizer extends SvelteComponentTyped<EqualizerProps, EqualizerEvents, EqualizerSlots> {
}
export {};
