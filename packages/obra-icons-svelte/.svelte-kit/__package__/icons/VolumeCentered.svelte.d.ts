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
export type VolumeCenteredProps = typeof __propDef.props;
export type VolumeCenteredEvents = typeof __propDef.events;
export type VolumeCenteredSlots = typeof __propDef.slots;
export default class VolumeCentered extends SvelteComponentTyped<VolumeCenteredProps, VolumeCenteredEvents, VolumeCenteredSlots> {
}
export {};
