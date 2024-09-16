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
export type FullscreenAltProps = typeof __propDef.props;
export type FullscreenAltEvents = typeof __propDef.events;
export type FullscreenAltSlots = typeof __propDef.slots;
export default class FullscreenAlt extends SvelteComponentTyped<FullscreenAltProps, FullscreenAltEvents, FullscreenAltSlots> {
}
export {};
