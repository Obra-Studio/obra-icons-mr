import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type VolumeOffFillProps = typeof __propDef.props;
export type VolumeOffFillEvents = typeof __propDef.events;
export type VolumeOffFillSlots = typeof __propDef.slots;
export default class VolumeOffFill extends SvelteComponentTyped<VolumeOffFillProps, VolumeOffFillEvents, VolumeOffFillSlots> {
}
export {};
