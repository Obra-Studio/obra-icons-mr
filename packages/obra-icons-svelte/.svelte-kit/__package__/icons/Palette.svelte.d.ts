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
export type PaletteProps = typeof __propDef.props;
export type PaletteEvents = typeof __propDef.events;
export type PaletteSlots = typeof __propDef.slots;
export default class Palette extends SvelteComponentTyped<PaletteProps, PaletteEvents, PaletteSlots> {
}
export {};
