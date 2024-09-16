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
export type VolumeOffProps = typeof __propDef.props;
export type VolumeOffEvents = typeof __propDef.events;
export type VolumeOffSlots = typeof __propDef.slots;
export default class VolumeOff extends SvelteComponentTyped<VolumeOffProps, VolumeOffEvents, VolumeOffSlots> {
}
export {};
