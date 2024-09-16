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
export type ColorFilterProps = typeof __propDef.props;
export type ColorFilterEvents = typeof __propDef.events;
export type ColorFilterSlots = typeof __propDef.slots;
export default class ColorFilter extends SvelteComponentTyped<ColorFilterProps, ColorFilterEvents, ColorFilterSlots> {
}
export {};
