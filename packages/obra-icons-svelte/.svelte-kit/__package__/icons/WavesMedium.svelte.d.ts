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
export type WavesMediumProps = typeof __propDef.props;
export type WavesMediumEvents = typeof __propDef.events;
export type WavesMediumSlots = typeof __propDef.slots;
export default class WavesMedium extends SvelteComponentTyped<WavesMediumProps, WavesMediumEvents, WavesMediumSlots> {
}
export {};
