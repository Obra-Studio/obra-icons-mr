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
export type WavesLightProps = typeof __propDef.props;
export type WavesLightEvents = typeof __propDef.events;
export type WavesLightSlots = typeof __propDef.slots;
export default class WavesLight extends SvelteComponentTyped<WavesLightProps, WavesLightEvents, WavesLightSlots> {
}
export {};
