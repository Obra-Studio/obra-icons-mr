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
export type GlassesProps = typeof __propDef.props;
export type GlassesEvents = typeof __propDef.events;
export type GlassesSlots = typeof __propDef.slots;
export default class Glasses extends SvelteComponentTyped<GlassesProps, GlassesEvents, GlassesSlots> {
}
export {};
