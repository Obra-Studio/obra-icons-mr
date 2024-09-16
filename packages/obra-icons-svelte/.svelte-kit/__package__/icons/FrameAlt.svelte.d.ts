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
export type FrameAltProps = typeof __propDef.props;
export type FrameAltEvents = typeof __propDef.events;
export type FrameAltSlots = typeof __propDef.slots;
export default class FrameAlt extends SvelteComponentTyped<FrameAltProps, FrameAltEvents, FrameAltSlots> {
}
export {};
