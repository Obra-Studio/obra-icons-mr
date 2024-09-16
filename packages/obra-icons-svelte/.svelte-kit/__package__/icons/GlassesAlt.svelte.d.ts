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
export type GlassesAltProps = typeof __propDef.props;
export type GlassesAltEvents = typeof __propDef.events;
export type GlassesAltSlots = typeof __propDef.slots;
export default class GlassesAlt extends SvelteComponentTyped<GlassesAltProps, GlassesAltEvents, GlassesAltSlots> {
}
export {};
