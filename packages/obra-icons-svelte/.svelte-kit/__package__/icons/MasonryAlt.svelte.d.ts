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
export type MasonryAltProps = typeof __propDef.props;
export type MasonryAltEvents = typeof __propDef.events;
export type MasonryAltSlots = typeof __propDef.slots;
export default class MasonryAlt extends SvelteComponentTyped<MasonryAltProps, MasonryAltEvents, MasonryAltSlots> {
}
export {};
