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
export type VolumeXProps = typeof __propDef.props;
export type VolumeXEvents = typeof __propDef.events;
export type VolumeXSlots = typeof __propDef.slots;
export default class VolumeX extends SvelteComponentTyped<VolumeXProps, VolumeXEvents, VolumeXSlots> {
}
export {};
